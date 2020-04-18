import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, tokenAuth, client) => {
    event.preventDefault();
    const res = await tokenAuth();
    localStorage.setItem("authToken", res.data.tokenAuth.token);
    client.writeData({ data: { isLoggedIn: true } });
    // this.props.history.push("/");
  };
  return (
    <div id="login-form" className="container">
      <h3 className="text-center my-4">Sign In</h3>
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{
          username,
          password,
        }}
        // onCompleted={props.history.push("/")}
      >
        {(tokenAuth, { loading, error, called, client }) => {
          return (
            <form onSubmit={(event) => handleSubmit(event, tokenAuth, client)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button
                className="btn btn-lg btn-primary btn-block my-2"
                type="submit"
                disabled={loading || !username.trim() || !password.trim()}
              >
                Sign in
              </button>
            </form>
          );
        }}
      </Mutation>
      <small>
        <Link to="/register">Don't have an account? Register here </Link>
      </small>
    </div>
  );
};

export default Login;

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
