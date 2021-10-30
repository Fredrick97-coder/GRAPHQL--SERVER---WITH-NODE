const { Post } = require("../models/posts");
const { newPost, updatePost, deletePost } = require("./mutations");

const resolvers = {
  Query: {
    allPost: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    newPost,
    updatePost,
    deletePost,
  },
};

module.exports = resolvers;
