/** @format */

import * as api from "../API";
import { LOAD_USER, LOGIN_USER, LOGOUT_USER } from "./types";
export const createUser = (newUser, history) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    dispatch({ type: LOGIN_USER, payload: data });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = (user, history) => async (dispatch) => {
  console.log("login", user);
  try {
    const { data } = await api.loginUser(user);
    dispatch({ type: LOGIN_USER, payload: data });

    history.push("/");
  } catch (error) {
    console.error(error);
  }
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  history.push("/");
};
export const loadUser = () => async (dispatch) => {
  try {
    console.log("loading user");
    const { data } = await api.authUser();
    console.log("user", data);
    console.log("loaded user");

    dispatch({ type: LOAD_USER });
  } catch (error) {
    console.log(error);
  }
};
