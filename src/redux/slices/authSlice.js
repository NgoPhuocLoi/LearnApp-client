import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isFetching: false,
    error: false,
    isAuthenticated: false,
    user: null,
    errorMsg: "",
  },
  reducers: {
    authStart: (state) => {
      state.isFetching = true;
    },
    loadUserSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    registerSuccess: (state) => {
      state.isFetching = false;
    },
    loginSuccess: (state, action) => {
      const { user, accessToken } = action.payload;
      state.isFetching = false;
      state.isAuthenticated = true;
      state.user = user;
      localStorage.setItem("accessToken", accessToken);
    },
    authFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMsg = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },

    resetErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;
export const {
  authFailed,
  authStart,
  authSuccess,
  registerSuccess,
  loginSuccess,
  loadUserSuccess,
  logoutUser,
  resetErrorMsg,
} = actions;

export default reducer;
