const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    allPost: [Post]
  }

  input PostInput {
    title: String
    description: String
  }

  type Mutation {
    newPost(input: PostInput): Post
    updatePost(id: String, input: PostInput): Post
    deletePost(id: String): String
  }
`;
