import React, { Component, Fragment } from "react";

import { Query } from "react-apollo";

import Post from "../components/Blog/Post";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";
import { GET_POSTS_QUERY } from "../queries";

export class Blog extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="display-4 py-4 text-center">Latest Posts</h2>
        <div className="row">
          <Query query={GET_POSTS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <Error error={error} />;

              return (
                <Fragment>
                  {data.posts.map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                      <Post post={post} />
                    </div>
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

export default Blog;
