import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",

  fetchOptions: {
    credentials: "include",
  },

  request: (operation) => {
    const token = localStorage.getItem("authToken") || "";
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  },

  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("authToken"),
    },
  },
});

const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);