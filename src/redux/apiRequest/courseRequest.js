import axios from "axios";
import {
  getCoursesSuccess,
  requestCourseFailed,
  requestCourseStart,
  createCourseSuccess,
  editCourseSuccess,
  deleteCourseSuccess,
} from "../slices/courseSlice";
import { apiUrl } from "../constant";

export const getAllCourses = async (dispatch) => {
  try {
    dispatch(requestCourseStart());

    const res = await axios.get(`${apiUrl}/course`);
    if (res.data.success) dispatch(getCoursesSuccess(res.data.courses));
  } catch (error) {
    console.log(error);
    dispatch(requestCourseFailed());
  }
};

export const createCourse = async (dispatch, courseForm) => {
  try {
    dispatch(requestCourseStart());

    const res = await axios.post(`${apiUrl}/course/create`, courseForm);
    if (res.data.success) dispatch(createCourseSuccess(res.data.course));
    return res.data.success;
  } catch (error) {
    console.log(error);
    dispatch(requestCourseFailed());
    return false;
  }
};

export const editCourse = async (dispatch, courseForm, id) => {
  dispatch(requestCourseStart());

  try {
    const res = await axios.put(`${apiUrl}/course/edit/${id}`, courseForm);
    if (res.data.success) {
      dispatch(editCourseSuccess(res.data.course));
      return res.data.success;
    }
  } catch (error) {
    console.log(error);
    dispatch(requestCourseFailed());
    return false;
  }
};

export const deleteCourse = async (dispatch, id) => {
  dispatch(requestCourseStart());

  try {
    const res = await axios.delete(`${apiUrl}/course/delete/${id}`);
    if (res.data.success) dispatch(deleteCourseSuccess(id));
  } catch (error) {
    console.log(error);
    dispatch(requestCourseFailed());
  }
};
