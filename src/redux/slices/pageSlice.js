import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: 0,
    inDashboard: false,
    dashboard: {
      openAddCourseModal: false,
      openEditCourseModal: false,
    },
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setInDashboard: (state, action) => {
      state.inDashboard = action.payload;
    },
    setOpenAddCourseModal: (state, action) => {
      state.dashboard.openAddCourseModal = action.payload;
    },
    setOpenEditCourseModal: (state, action) => {
      state.dashboard.openEditCourseModal = action.payload;
    },
  },
});

const { reducer, actions } = pageSlice;
export const {
  setCurrentPage,
  setInDashboard,
  setOpenAddCourseModal,
  setOpenEditCourseModal,
} = actions;
export default reducer;
