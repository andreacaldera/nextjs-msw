"use client";

import { useState } from "react";
import { useRestMsw } from "./use-rest-msw";

export const TestRest = () => {
  useRestMsw();
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(async (res) => {
      const d = await res.json();
      setData(d);
    });
  };

  return (
    <>
      {data ? JSON.stringify(data) : null}
      <div>Test Rest</div>
      <button onClick={fetchData}>Click me</button>
    </>
  );
};
