/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserScehma = Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Users = mongoose.model("users", UserScehma);
export default Users;
