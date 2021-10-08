/** @format */
import Post from "../models/blog.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const editPost = async (req, res) => {
  const id = req.params.id;
  const post = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    if (
      post.likes.filter((like) => like.user.toString() === req.userId).length >
      0
    ) {
      return res.status(404).jsonp({ msg: "Post already like" });
    }

    post.likes.unshift({ user: req.userId });
    await post.save();
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return res.status(404).jsonp({ msg: "No post found" });
    }
    res.status(500).send("Server Error");
  }
};

export const unlikePost = async(req, res);

export const commentPost = (req, res) => {
  try {
  } catch (error) {}
};
