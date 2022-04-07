import { configureStore } from "@reduxjs/toolkit";
import {
  lessonReducer,
  authReducer,
  folderReducer,
  userReducer,
  pageReducer,
  courseReducer,
  utilsReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
    folder: folderReducer,
    user: userReducer,
    page: pageReducer,
    course: courseReducer,
    utils: utilsReducer,
  },
});

export default store;
