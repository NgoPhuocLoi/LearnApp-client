import { configureStore } from "@reduxjs/toolkit";
import {
  lessonReducer,
  authReducer,
  folderReducer,
  userReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
    folder: folderReducer,
    user: userReducer,
  },
});

export default store;
