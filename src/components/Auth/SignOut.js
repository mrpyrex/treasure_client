import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const handleSignout = (client, history) => {
  localStorage.removeItem("authToken");
  client.resetStore();
  history.push("/");
};
const SignOut = ({ history }) => (
  <ApolloConsumer>
    {(client) => {
      console.log(client);
      return (
        <button
          className="btn btn-danger"
          onClick={() => handleSignout(client, history)}
        >
          SignOut
        </button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(SignOut);
