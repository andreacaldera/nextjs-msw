import { useEffect } from "react";

import { rest, setupWorker } from "msw";

export const useRestMsw = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  useEffect(() => {
    console.log(`using rest msw endpoint ${url}`);
    const handler = rest.get(url, (_req, res, ctx) => {
      console.log("intercepting rest call");
      return res(ctx.json({ fromMsw: true }));
    });

    const worker = setupWorker(handler);
    void worker.start();

    return () => worker.stop();
  }, []);
};
