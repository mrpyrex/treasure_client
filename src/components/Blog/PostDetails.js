import React from "react";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Loading from "../Shared/Loading";
import CreatePost from "./CreatePost";
import Error from "../Shared/Error";
import DeletePost from "./DeletePost";

import { GET_POSTDETAIL_QUERY } from "../../queries";

const PostDetails = (post) => {
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
                <div className="col-md-8 mb-3">
                  <img src={thumb} alt={title} />
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <p>By - {author.username}</p>
                  <small>
                    {" "}
                    <Moment fromNow>{createdAt}</Moment>{" "}
                  </small>
                  <div className="row my-4">
                    <button className="btn btn-primary btn-sm">
                      Update Post
                    </button>
                    <DeletePost />
                  </div>
                </div>
                <div className="col-md-4">
                  <CreatePost post={post} />
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
