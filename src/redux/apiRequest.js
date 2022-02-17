import axios from "axios";
import {
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
} from "./lessonSlice";
import { apiUrl } from "./constant";

export const getAllLessons = async (dispatch) => {
  dispatch(getLessonsStart());
  try {
    const res = await axios.get(`${apiUrl}/lessons`);
    if (res.data.success) dispatch(getLessonsSuccess(res.data.lessons));
  } catch (error) {
    dispatch(getLessonsFailed());
  }
};

export const addLesson = async (dispatch, newLesson) => {
  dispatch(addLessonStart());
  try {
    const res = await axios.post(`${apiUrl}/lessons`, newLesson);
    if (res.data.success) dispatch(addLessonSuccess(newLesson));
    return res.data.success;
  } catch (error) {
    dispatch(addLessonFailed());
    return false;
  }
};

export const deleteLesson = async (dispatch, id) => {
  dispatch(deleteLessonStart());
  try {
    const res = await axios.delete(`${apiUrl}/lessons/${id}`);
    if (res.data.success) dispatch(deleteLessonSuccess(id));
  } catch (error) {
    dispatch(deleteLessonFailed());
  }
};

export const updateLesson = async (dispatch, id, updatedLesson) => {
  dispatch(updateLessonStart());
  try {
    const res = axios.put(`${apiUrl}/lessons/${id}`, updatedLesson);
    if (res.data.success) {
      dispatch(updateLessonSuccess(res.data.lesson));
    }
    return res.data.success;
  } catch (error) {
    dispatch(updateLessonFailed());
    return false;
  }
};
