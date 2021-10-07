/** @format */

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 5000;
import UserRoutes from "./routes/users.js";
import PostRoutes from "./routes/Posts.js";
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", UserRoutes);
app.use("/api/post", PostRoutes);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(
    "mongodb+srv://root:root123@cluster0.4wkwj.mongodb.net/miniblogs?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT);
    console.log("databse and servr are conntected");
  })
  .catch((err) => {
    console.log(err.message);
  });
