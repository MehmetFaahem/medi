import { configureStore } from "@reduxjs/toolkit";
import mediReducer from "./userSlice";

export const mediStore = configureStore({
  reducer: mediReducer,
});
