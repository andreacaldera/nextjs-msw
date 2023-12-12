"use client";

import type { ReactNode } from "react";

import { cacheExchange, createClient, fetchExchange } from "urql/core";
import { Provider } from "urql";

export const client: ReturnType<typeof createClient> = createClient({
  url: "https://countries.trevorblades.com/",
  requestPolicy: "cache-and-network",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: { headers: { accept: "*/*" } },
});

export const GraphqlPageProvider = ({ children }: { children: ReactNode }) => (
  <Provider value={client}>{children}</Provider>
);
