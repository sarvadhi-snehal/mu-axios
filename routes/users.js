/** @format */

import express from "express";
import { createUser, loginUser } from "../controllers/user.js";
const router = express.Router();

router.post("/", createUser);
router.post("/", loginUser);

export default router;
