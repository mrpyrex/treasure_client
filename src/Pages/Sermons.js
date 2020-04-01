import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Sermon from "../components/Sermon/Sermon";
import Loading from "../components/Shared/Loading";

const Sermons = () => {
  return (
    <div className="container">
      <Query query={GET_SERMONS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <h4>error!!</h4>;
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

export const GET_SERMONS_QUERY = gql`
  query getSermonsQuery {
    sermons {
      id
      title
      description
      url
      createdBy
      createdAt
    }
  }
`;
