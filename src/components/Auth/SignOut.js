import React from "react";
import { ApolloConsumer } from "react-apollo";

const SignOut = (props) => {
  const handleSignout = (client) => {
    localStorage.removeItem("authToken");
    client.writeData({ data: { isLoggedIn: false } });
    //  props.history.push("/");
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <button
          onClick={() => handleSignout(client)}
          className="btn btn-danger"
        >
          SignOut
        </button>
      )}
    </ApolloConsumer>
  );
};

export default SignOut;
