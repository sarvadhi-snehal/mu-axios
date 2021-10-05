/** @format */

import express from "express";
const router = express.Router();
import { getAllPosts, createPost } from "../controllers/post.js";
//@get all BlogScehma
router.get("/", getAllPosts);
router.post("/", createPost);

export default router;
