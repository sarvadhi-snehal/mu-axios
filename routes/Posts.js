/** @format */

import express from "express";
const router = express.Router();
import {
  getAllPosts,
  createPost,
  editPost,
  deletePost
} from "../controllers/post.js";
//@get all BlogScehma
router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);

export default router;
