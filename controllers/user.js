/** @format */

import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await Users.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    const hashedPasswords = await bcrypt.hash(password, 12);

    const user = new Users({ email, name, password: hashedPasswords });
    await user.save();
    const token = jwt.sign({ email: user.email, id: user._id }, "learning", {
      expiresIn: "1h"
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  try {
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credential" });
    const token = jwt.sign({ email: user.email, id: user._id }, "learning", {
      expiresIn: "1h"
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const loadUser = async (req, res) => {
  try {
    if (!req.userId) {
      res.status(400).json({ message: "user not authinticated" });
    }
    const user = await Users.findById(req.userId).select("-password");
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
