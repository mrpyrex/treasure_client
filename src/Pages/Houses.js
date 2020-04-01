import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import House from "../components/HCF/House";
import Loading from "../components/Shared/Loading";

export class Houses extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Query query={GET_CENTERS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <h4>error!!!</h4>;

              return (
                <Fragment>
                  {data.houses.map(house => (
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

const GET_CENTERS_QUERY = gql`
  query CentersQuery {
    houses {
      id
      name
      host
      address
      phone
    }
  }
`;
