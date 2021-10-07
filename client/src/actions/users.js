/** @format */

import * as api from "../API";
import { CREATE_USER, LOGIN_USER } from "./types";
export const createUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = (user) => async (dispatch) => {
  console.log("login", user);
  try {
    const { data } = await api.loginUser(user);
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
};
