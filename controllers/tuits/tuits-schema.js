import mongoose from "mongoose";
const tuitsSchema = new mongoose.Schema(
  {
    topic: String,
    title: String,
    userName: String,
    avatar: String,
    handle: String,
    time: String,
    tuit: String,
    replies: Number,
    retuits: Number,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
  },
  { collection: "tuits" }
);
export default tuitsSchema;
