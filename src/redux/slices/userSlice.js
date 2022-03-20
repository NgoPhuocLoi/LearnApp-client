import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    updateUserStart: (state) => {
      state.isFetching = true;
    },
    updateUserSuccess: (state, action) => {
      const { field, data } = action.payload;
      state.isFetching = false;
      state.user = { ...state.user, [field]: data };
    },
    updateUserFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loadCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  updateUserStart,
  updateUserFailed,
  updateUserSuccess,
  loadCurrentUser,
} = actions;
export default reducer;
