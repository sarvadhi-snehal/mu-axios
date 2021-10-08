/** @format */

import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./users";
export default combineReducers({
  posts,
  auth
});
