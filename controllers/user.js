/** @format */

import Users from "../models/users.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  console.log(req.body);
  const salt = bcrypt.genSalt;

  try {
    const user = new Users(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await Users.findOne(email);
    if (!user) return res.status(400).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};
