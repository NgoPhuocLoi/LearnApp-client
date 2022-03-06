import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
  name: "lesson",
  initialState: {
    allLessons: [],
    updatedLesson: {
      title: "",
      driveUrl: "",
      formUrl: "",
    },
    doneLessons: [],
    isShowUpdateModal: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    getLessonsStart: (state) => {
      state.isFetching = true;
    },
    getLessonsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.allLessons = action.payload;
    },
    getLessonsFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addLessonStart: (state) => {
      state.isFetching = true;
    },
    addLessonSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.allLessons = [...state.allLessons, action.payload];
    },
    addLessonFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteLessonStart: (state) => {
      state.isFetching = true;
    },
    deleteLessonSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.allLessons = state.allLessons.filter(
        (lesson) => lesson._id !== action.payload
      );
    },
    deleteLessonFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateLessonStart: (state) => {
      state.isFetching = true;
    },
    updateLessonSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.allLessons = state.allLessons.map((lesson) =>
        lesson._id === action.payload._id ? action.payload : lesson
      );
    },
    updateLessonFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUpdatedLesson: (state, action) => {
      state.updatedLesson = action.payload;
    },
    showUpdateModal: (state, action) => {
      state.isShowUpdateModal = action.payload;
    },
    getDoneLessons: (state, action) => {
      state.doneLessons = action.payload;
    },
    addDoneLesson: (state, action) => {
      state.isFetching = false;
      state.doneLessons = [...state.doneLessons, action.payload];
    },
    removeDoneLesson: (state, action) => {
      state.isFetching = false;
      state.doneLessons = state.doneLessons.filter(
        (lesson) => lesson !== action.payload
      );
    },
  },
});

const { reducer, actions } = lessonSlice;
export const {
  getLessonsFailed,
  getLessonsStart,
  getLessonsSuccess,
  addLessonFailed,
  addLessonStart,
  addLessonSuccess,
  deleteLessonFailed,
  deleteLessonStart,
  deleteLessonSuccess,
  updateLessonFailed,
  updateLessonStart,
  updateLessonSuccess,
  updateUpdatedLesson,
  showUpdateModal,
  getDoneLessons,
  addDoneLesson,
  removeDoneLesson,
} = actions;

export default reducer;
