import "whatwg-fetch";
import { useEffect } from "react";

import { graphql, setupWorker } from "msw";

export const useGraphqlMsw = () => {
  const url = "https://countries.trevorblades.com/";
  useEffect(() => {
    console.log(`Mocking graphql call using ${url}`);
    const handler = graphql
      .link(url)
      .query("getCountries", (_req, res, ctx) => {
        console.log("intercepting graphql call");
        return res(ctx.data({ countries: [{ name: "mock country" }] }));
      });

    const worker = setupWorker(handler);
    void worker.start();

    return () => worker.stop();
  }, []);
};
