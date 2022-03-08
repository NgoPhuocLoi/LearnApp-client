import axios from "axios";
import { apiUrl } from "../constant";
import {
  createFolderSuccess,
  deleteFolderSuccess,
  getFoldersSuccess,
  renameFolderSuccess,
  requestFolderFailed,
  requestFolderStart,
} from "../slices/folderSlice";

export const getAllFolders = async (dispatch) => {
  dispatch(requestFolderStart());
  try {
    const res = await axios.get(`${apiUrl}/folder`);
    if (res.data.success) {
      dispatch(getFoldersSuccess(res.data.folders));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(requestFolderFailed());
  }
};

export const createFolder = async (dispatch, newFolder) => {
  dispatch(requestFolderStart());

  try {
    const res = await axios.post(`${apiUrl}/folder/create`, newFolder);
    if (res.data.success) {
      dispatch(createFolderSuccess(res.data.folder));
    }
  } catch (error) {
    console.log(error);
    dispatch(requestFolderFailed());
  }
};

export const renameFolder = async (dispatch, newFolder, id) => {
  dispatch(requestFolderStart());
  try {
    const res = await axios.put(`${apiUrl}/folder/${id}`, newFolder);

    if (res.data.success) {
      dispatch(renameFolderSuccess(res.data.folder));
    }
  } catch (error) {
    console.log(error);
    dispatch(requestFolderFailed());
  }
};

export const deleteFolder = async (dispatch, id) => {
  dispatch(requestFolderStart());
  try {
    const res = await axios.delete(`${apiUrl}/folder/${id}`);
    if (res.data.success) {
      dispatch(deleteFolderSuccess(id));
    }
  } catch (error) {
    console.log(error);
    dispatch(requestFolderFailed());
  }
};
