import axios from "axios";
import { apiUrl } from "../constant";
import {
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} from "../slices/userSlice";

export const updateUser = async (dispatch, field, data) => {
  dispatch(updateUserStart());

  try {
    const res = await axios.put(`${apiUrl}/user/update`, {
      type: field,
      [field]: data,
    });
    if (res.data.success) dispatch(updateUserSuccess({ field, data }));
  } catch (error) {
    console.log(error);
    dispatch(updateUserFailed());
  }
};
