import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import folderIcon from "../../../assets/folder-fill.svg";
import {
  setCurrentFolder,
  setFolderActive,
} from "../../../redux/slices/folderSlice";
import CustomMenu from "../CustomMenu/CustomMenu";
import "./SingleFolder.scss";

const SingleFolder = ({ title, index, id }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenFolder = () => {
    dispatch(setCurrentFolder({ id, title }));
    navigate(`/english/folder/${id}`);
  };
  return (
    <div className="singleFolder-container">
      <div
        ref={ref}
        className="singleFolder"
        onDoubleClick={handleOpenFolder}
        onClick={(e) => ref.current.classList.toggle("active")}
        onContextMenu={(e) => {
          e.preventDefault();
          dispatch(setFolderActive(index));
        }}
      >
        <img src={folderIcon} alt="folder-icon" />
        <h4 className="folder-title">{title}</h4>
      </div>
      <CustomMenu index={index} id={id} />
    </div>
  );
};

export default SingleFolder;
