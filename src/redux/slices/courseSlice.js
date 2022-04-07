import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    allCourses: [],
    isFetching: false,
    error: false,
    courseClickedToEdit: null,
  },
  reducers: {
    requestCourseStart: (state) => {
      state.isFetching = true;
    },
    getCoursesSuccess: (state, action) => {
      state.allCourses = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    createCourseSuccess: (state, action) => {
      state.allCourses = [...state.allCourses, action.payload];
      state.isFetching = false;
      state.error = false;
    },
    editCourseSuccess: (state, action) => {
      state.allCourses = state.allCourses.map((course) =>
        course._id === action.payload._id ? action.payload : course
      );
      state.isFetching = false;
      state.error = false;
    },
    deleteCourseSuccess: (state, action) => {
      state.allCourses = state.allCourses.filter(
        (course) => course._id !== action.payload
      );
      state.isFetching = false;
      state.error = false;
    },
    requestCourseFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setCourseEdited: (state, action) => {
      state.courseClickedToEdit = action.payload;
    },
  },
});

const { reducer, actions } = courseSlice;
export const {
  requestCourseFailed,
  requestCourseStart,
  getCoursesSuccess,
  editCourseSuccess,
  deleteCourseSuccess,
  createCourseSuccess,
  setCourseEdited,
} = actions;
export default reducer;
