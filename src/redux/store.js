import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./slices/lessonSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
  },
});

export default store;
