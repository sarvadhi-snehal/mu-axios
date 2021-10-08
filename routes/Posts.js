/** @format */

import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  getAllPosts,
  createPost,
  editPost,
  deletePost,
  likePost
} from "../controllers/post.js";
//@get all BlogScehma
router.get("/", getAllPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, editPost);
router.delete("/:id", auth, deletePost);
router.post("/:id", auth, likePost);

export default router;
