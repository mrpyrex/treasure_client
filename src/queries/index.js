import { gql } from "apollo-boost";

// AUTH QUERIES & MUTATIONS
export const REGISTER_MUTATION = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAuthor(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      author {
        username
        email
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// POST QUERIES AND MUTATIONS
export const CREATE_POST_MUTATION = gql`
  mutation($title: String!, $content: String!, $thumb: String!) {
    createPost(title: $title, content: $content, thumb: $thumb) {
      post {
        id
        title
        content
        thumb
        createdAt
        slug
      }
    }
  }
`;

export const GET_POSTS_QUERY = gql`
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

export const GET_POSTDETAIL_QUERY = gql`
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

export const DELETE_POST_MUTATION = gql`
  mutation($postId: Int!) {
    deletePost(postId: $postId) {
      postId
    }
  }
`;

export const GET_POST_CAT_QUERY = gql`
  query PostsCatQuery {
    postCats {
      id
      catDesc
      catTitle
    }
  }
`;

export const GET_CENTERS_QUERY = gql`
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
