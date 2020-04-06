import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

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

const DELETE_POST_MUTATION = gql`
  mutation($postId: Int!) {
    deletePost(postId: $postId) {
      postId
    }
  }
`;
