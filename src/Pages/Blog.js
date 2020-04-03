import React, { Component, Fragment } from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Post from "../components/Blog/Post";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

export class Blog extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="display-4 py-4 text-center">Latest Posts</h2>
        <div className="row">
          <Query query={GET_POSTS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <Error />;

              return (
                <Fragment>
                  {data.posts.map(post => (
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

const GET_POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      thumb
      createdAt
      content
      category {
        id
        catTitle
      }
      published
      featured
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;
