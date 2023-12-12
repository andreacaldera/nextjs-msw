import { createClient, fetchExchange } from "urql/core";

export const client: ReturnType<typeof createClient> = createClient({
  url: "https://countries.trevorblades.com/graphql",
  requestPolicy: "cache-and-network",
  exchanges: [fetchExchange],
  fetchOptions: { headers: { accept: "*/*" } },
});
