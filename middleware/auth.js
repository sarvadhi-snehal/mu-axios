/** @format */

import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decoded = jwt.verify(token, "learning");
    req.userId = decoded?.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};

export default auth;
