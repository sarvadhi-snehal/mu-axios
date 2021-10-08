/** @format */

import { LOGIN_USER, LOGOUT_USER, LOAD_USER } from "../actions/types";

const authReducer = (state = { authData: null, isLoggedIn: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      const token = JSON.parse(localStorage.getItem("authData"));
      return {
        ...state,
        authData: token,
        isLoggedIn: true
      };
    case LOGIN_USER:
      localStorage.setItem("authData", JSON.stringify(payload));
      return { ...state, authData: payload, isLoggedIn: !state.isLoggedIn };
    case LOGOUT_USER:
      localStorage.removeItem("authData");
      return { ...state, authData: null, isLoggedIn: false };
    default:
      return state;
  }
};
export default authReducer;
