/** @format */
import Post from "../models/blog.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.status(200).json(posts);
};
export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "post deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const editPost = async (req, res) => {
  const id = req.params.id;
  const post = req.body;
  console.log(id, post);
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};
