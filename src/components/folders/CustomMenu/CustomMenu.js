import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CustomMenu.scss";
import {
  setFolderActive,
  setShowEditFolderModal,
  updateEditedFolder,
} from "../../../redux/slices/folderSlice";
import editIcon from "../../../assets/pencil.svg";
import deleteIcon from "../../../assets/trash.svg";
import { deleteFolder } from "../../../redux/apiRequest/folderRequest";
const CustomMenu = ({ index, id }) => {
  const { folderActive, allFolders } = useSelector((state) => state.folder);
  const dispatch = useDispatch();

  const handleOpenEditFolderModal = () => {
    dispatch(setShowEditFolderModal(true));
    dispatch(setFolderActive(-1));
    const editedFolder = allFolders.find((folder) => folder._id === id);
    dispatch(updateEditedFolder(editedFolder));
  };

  const handleDeleteFolder = async () => {
    await deleteFolder(dispatch, id);
    dispatch(setFolderActive(-1));
  };

  return (
    <div
      className="custom-menu-container"
      style={{ display: folderActive === index ? "block" : "none" }}
    >
      <ul className="custom-menu__list">
        <li className="custom-menu__item" onClick={handleOpenEditFolderModal}>
          <img src={editIcon} alt="edit-icon" />
          <p>Rename</p>
        </li>
        <li className="custom-menu__item" onClick={handleDeleteFolder}>
          <img src={deleteIcon} alt="edit-icon" />
          <p>Delete</p>
        </li>
      </ul>
      <button
        className="custom-menu__close-btn"
        onClick={() => dispatch(setFolderActive(null))}
      >
        X
      </button>
    </div>
  );
};

export default CustomMenu;
