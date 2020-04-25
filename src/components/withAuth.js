import React from "react";

import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { ME_QUERY } from "../queries";

const withAuth = (conditionFunc) => (Component) => (props) => (
  <Query query={ME_QUERY}>
    {({ data, loading }) => {
      if (loading) return null;
      return conditionFunc(data) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  </Query>
);

export default withAuth;
