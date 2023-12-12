"use client";

import { gql } from "urql/core";
import { useQuery } from "urql";
import { useGraphqlMsw } from "../graphql-apollo/use-graphql-msw";
import { useState } from "react";

const query = gql`
  query getCountries {
    countries {
      name
    }
  }
`;

export const TestGraphql = () => {
  const [pause, setPause] = useState(true);
  useGraphqlMsw();
  const [{ error, data }] = useQuery({ query, pause });
  console.log({ error, data });

  return (
    <>
      {data ? JSON.stringify(data) : null}
      <div>Test Graphql URQL</div>
      <button onClick={() => setPause(false)}>Click me</button>
    </>
  );
};
