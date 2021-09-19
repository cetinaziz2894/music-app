import { combineReducers } from "redux";
import message from "./message";
import video from "./video";

export default combineReducers({
  message,
  video
});