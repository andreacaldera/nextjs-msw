"use client";

import { useGraphqlMsw } from "./use-graphql-msw";
import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query getCountries {
    countries {
      name
    }
  }
`;

export const TestGraphql = () => {
  useGraphqlMsw();
  const [getCountries, { error, data }] = useLazyQuery(query, {
    fetchPolicy: "no-cache",
  });
  console.log({ error, data });

  return (
    <>
      {data ? JSON.stringify(data) : null}
      <div>Test Graphql Apollo</div>
      <button onClick={() => getCountries()}>Click me</button>
    </>
  );
};
