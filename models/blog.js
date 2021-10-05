/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogScehma = Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  feeling: {
    type: String,
    required: true
  },
  createBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Post = mongoose.model("post", BlogScehma);
export default Post;
