/** @format */

import express from "express";
import { createUser, loginUser, loadUser } from "../controllers/user.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.post("/", createUser);
router.post("/login", loginUser);

router.get("/", auth, loadUser);

export default router;
