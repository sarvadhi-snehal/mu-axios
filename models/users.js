/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserScehma = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

const Users = mongoose.model("users", UserScehma);
export default Users;
