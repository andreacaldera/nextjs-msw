"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { ReactNode } from "react";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

export const GraphqlPageProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={client}>{children} </ApolloProvider>
);
