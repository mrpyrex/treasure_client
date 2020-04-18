import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";

import House from "../components/HCF/House";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

import { GET_CENTERS_QUERY } from "../queries";

export class Houses extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Query query={GET_CENTERS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <Error error={error} />;

              return (
                <Fragment>
                  {data.houses.map((house) => (
                    <House key={house.id} house={house} />
                  ))}
                </Fragment>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Houses;
