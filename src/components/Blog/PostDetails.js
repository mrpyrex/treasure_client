import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Loading from "../Shared/Loading";
import CreatePost from "./CreatePost";
import Error from "../Shared/Error";

const PostDetails = () => {
  let { id } = useParams();

  return (
    <div className="container">
      <Query query={GET_POSTDETAIL_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          const { title, thumb, createdAt, content, author } = data.post;

          return (
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <img src={thumb} alt={title} />
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <p>By - {author.username}</p>
                  <small>
                    {" "}
                    <Moment fromNow>{createdAt}</Moment>{" "}
                  </small>
                </div>
                <div className="col-md-4">
                  <CreatePost />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default PostDetails;

const GET_POSTDETAIL_QUERY = gql`
  query PostDetailQuery($id: Int!) {
    post(id: $id) {
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
