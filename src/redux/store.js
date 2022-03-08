import { configureStore } from "@reduxjs/toolkit";
import { lessonReducer, authReducer, folderReducer } from "./slices";

const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
    folder: folderReducer,
  },
});

export default store;
