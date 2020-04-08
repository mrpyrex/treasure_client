import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Error from "../Shared/Error";

const Register = ({ setNewAuthor }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (event, createAuthor) => {
    event.preventDefault();
    createAuthor();
  };

  return (
    <div id="login-form" className="container">
      <h3 className="text-center my-4">Register</h3>

      <Mutation
        mutation={REGISTER_MUTATION}
        variables={{
          firstName,
          lastName,
          username,
          email,
          password,
        }}
        onCompleted={(data) => {
          console.log(data);
          setShow(true);
        }}
      >
        {(createAuthor, { loading, error }) => {
          return (
            <form onSubmit={(event) => handleSubmit(event, createAuthor)}>
              <div className="row">
                <div className="col form-group">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </div>
                <div className="col form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
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
              {/* <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                />
              </div> */}

              <button
                className="btn btn-lg btn-primary btn-block my-2"
                type="submit"
                disabled={
                  loading ||
                  !username.trim() ||
                  !email.trim() ||
                  !password.trim() ||
                  !firstName.trim() ||
                  !lastName.trim()
                }
              >
                {loading ? "Registering ..." : "Sign Up"}
              </button>
              {error && <Error error={error} />}
            </form>
          );
        }}
      </Mutation>

      <small>
        <Link to="/login">Already have an account? Signin here</Link>
      </small>
      <Container fluid="sm">
        <Modal show={show} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            A new user with username {username} has been created successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setNewAuthor(false)}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Register;

const REGISTER_MUTATION = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAuthor(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      author {
        username
        email
        firstName
        lastName
      }
    }
  }
`;
