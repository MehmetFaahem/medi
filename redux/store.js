import { configureStore } from "@reduxjs/toolkit";
import mediReducer from "./userSlice";

export const mediStore = configureStore({
  reducer: mediReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
