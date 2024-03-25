import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import { randomUUID } from "crypto";

interface IUser {
  name: string;
  email: string;
  password: string
  chats : []
}

const chatSchema = new Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});
export default mongoose.model<IUser>("User", userSchema);
