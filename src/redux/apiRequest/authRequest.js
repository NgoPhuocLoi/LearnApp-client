import axios from "axios";
import {
  authFailed,
  authStart,
  loginSuccess,
  registerSuccess,
  loadUserSuccess,
  logoutUser,
} from "../slices/authSlice";
import { apiUrl } from "../constant";
import setAuthToken from "../../utils/setAuthToken";
import { getDoneLessons } from "../slices/lessonSlice";

export const registerUser = async (dispatch, newUser) => {
  dispatch(authStart());
  try {
    const res = await axios.post(`${apiUrl}/auth/register`, newUser);
    if (res.data.success) {
      dispatch(registerSuccess(res.data.message));
    }

    return res.data.success;
  } catch (error) {
    console.log("error.response.data", error.response.data);
    dispatch(authFailed(error.response.data.message));
  }
};

export const loadUser = async (dispatch) => {
  dispatch(authStart());
  if (localStorage["accessToken"]) {
    setAuthToken(localStorage["accessToken"]);
  }

  try {
    const res = await axios.get(`${apiUrl}/auth`);

    if (res.data.success) {
      dispatch(loadUserSuccess(res.data.user));
      dispatch(getDoneLessons(res.data.user.doneLessons));
    }
    return res.data.success;
  } catch (error) {
    dispatch(authFailed());
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch(authStart());

  try {
    const res = await axios.post(`${apiUrl}/auth/login`, user);
    if (res.data.success) {
      loadUser(dispatch);
      dispatch(loginSuccess(res.data));
      dispatch(getDoneLessons(res.data.user.doneLessons));
    }

    return res.data.success;
  } catch (error) {
    console.log("error", error);
    dispatch(authFailed(error.response.data.message));
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem("accessToken");
  dispatch(logoutUser());
};
