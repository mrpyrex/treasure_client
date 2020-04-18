import React from "react";
import { Mutation } from "react-apollo";

import { DELETE_POST_MUTATION } from "../../queries";

const DeletePost = (post) => {
  return (
    <Mutation
      mutation={DELETE_POST_MUTATION}
      variables={{ postId: post.id }}
      onCompleted={(data) => {
        console.log({ data });
      }}
    >
      {(deletePost) => (
        <button className="btn btn-danger btn-sm ml-auto" onClick={deletePost}>
          Delete Post
        </button>
      )}
    </Mutation>
  );
};

export default DeletePost;
