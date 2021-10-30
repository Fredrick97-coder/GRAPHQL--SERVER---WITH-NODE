const { Post } = require("../models/posts");

const newPost = async (parent, args, context, info) => {
  const { title, description } = args.input;
  const post = await new Post({ title, description }).save();

  return post;
};

const updatePost = async (parent, args, context, info) => {
  const { id } = args;
  const { title, description } = args.input;
  const post = await Post.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );

  return post;
};

const deletePost = async (parent, args, context, info) => {
  const { id } = args;
  await Post.findByIdAndDelete(id);

  return "Deleted";
};

module.exports = { newPost, updatePost, deletePost };
