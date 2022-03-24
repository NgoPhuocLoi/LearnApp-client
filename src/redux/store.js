import { configureStore } from "@reduxjs/toolkit";
import {
  lessonReducer,
  authReducer,
  folderReducer,
  userReducer,
  pageReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
    folder: folderReducer,
    user: userReducer,
    page: pageReducer,
  },
});

export default store;
