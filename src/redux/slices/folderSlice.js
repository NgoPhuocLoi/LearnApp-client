import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name: "folder",
  initialState: {
    allFolders: [],
    isFetching: false,
    error: false,
    folderActive: null,
    showEditFolderModal: false,
    editedFolder: {
      title: "",
    },
    currentFolder: null,
  },
  reducers: {
    requestFolderStart: (state) => {
      state.isFetching = true;
    },
    getFoldersSuccess: (state, action) => {
      state.isFetching = false;
      state.allFolders = action.payload;
    },
    createFolderSuccess: (state, action) => {
      state.isFetching = false;
      state.allFolders = [...state.allFolders, action.payload];
    },
    renameFolderSuccess: (state, action) => {
      state.isFetching = false;
      state.allFolders = state.allFolders.map((folder) =>
        folder._id === action.payload._id ? action.payload : folder
      );
    },
    deleteFolderSuccess: (state, action) => {
      state.isFetching = false;
      state.allFolders = state.allFolders.filter(
        (folder) => folder._id !== action.payload
      );
    },

    requestFolderFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setFolderActive: (state, action) => {
      state.folderActive = action.payload;
    },
    setShowEditFolderModal: (state, action) => {
      state.showEditFolderModal = action.payload;
    },
    updateEditedFolder: (state, action) => {
      state.editedFolder = action.payload;
    },
    setCurrentFolder: (state, action) => {
      state.currentFolder = action.payload;
    },
  },
});

const { reducer, actions } = folderSlice;
export const {
  requestFolderFailed,
  requestFolderStart,
  getFoldersSuccess,
  createFolderSuccess,
  renameFolderSuccess,
  deleteFolderSuccess,
  setFolderActive,
  setShowEditFolderModal,
  updateEditedFolder,
  setCurrentFolder,
} = actions;

export default reducer;
