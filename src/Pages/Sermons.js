import React from "react";
import { Query } from "react-apollo";

import Sermon from "../components/Sermon/Sermon";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

import { GET_SERMONS_QUERY } from "../queries";

const Sermons = () => {
  return (
    <div className="container">
      <Query query={GET_SERMONS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error error={error} />;
          const sermons = data.sermons;
          return (
            <div className="row">
              <Sermon sermons={sermons} />
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Sermons;
