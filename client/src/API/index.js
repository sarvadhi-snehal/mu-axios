/** @format */

import axios from "axios";

const url = "http://localhost:5000/api";

export const fetchPosts = () => axios.get(url + "/post");
export const createPost = (post) => axios.post(url + "/post", post);
export const editPost = (id, post) => axios.patch(url + "/post/" + id, post);
export const deletePost = (id) => axios.delete(url + "/post/" + id);

// users
export const loginUser = (user) => axios.post(url + "/user", user);
export const createUser = (user) => axios.post(url + "/user", user);
