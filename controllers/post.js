/** @format */
import Post from "../models/blog.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.status(200).json(posts);
};
export const createPost = (req, res) => {};
