import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    showToast: {
      type: "",
      message: "",
      isShow: false,
    },
  },
  reducers: {
    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },
  },
});

const { reducer, actions } = utilsSlice;
export const { setShowToast } = actions;
export default reducer;
