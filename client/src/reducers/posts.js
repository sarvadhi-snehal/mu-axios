/**
 * /* eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

/** @format */

import {
  GET_ALL_POSTS,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST
} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return payload;
    case CREATE_POST:
      return [...posts, payload];
    case DELETE_POST:
      return posts.filter((post) => post.id !== payload);
    case EDIT_POST:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    default:
      return posts;
  }
};
