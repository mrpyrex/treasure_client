import React, { createContext } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export const UserContext = createContext();

export const UserProvider = (props) => {
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      likeSet {
        track {
          id
        }
      }
    }
  }
`;
