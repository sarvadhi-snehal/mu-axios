/** @format */

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("authData")) {
    const { token } = JSON.parse(localStorage.getItem("authData"));

    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export const fetchPosts = () => API.get("/post");
export const createPost = (post) => API.post("/post", post);
export const editPost = (id, post) => API.patch("/post/" + id, post);
export const deletePost = (id) => API.delete("/post/" + id);
export const likePost = (id) => API.post("/post/" + id);
export const commentPost = (id, comment) => API.post("/post/comment" + id);

// users
export const loginUser = (user) => API.post("/user/login", user);
export const createUser = (user) => API.post("/user", user);
export const authUser = () => API.get("/user");
