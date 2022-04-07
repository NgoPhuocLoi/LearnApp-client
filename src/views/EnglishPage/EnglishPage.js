import React, { useEffect, useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import addBtn from "../../assets/plus-circle-fill.svg";
import AddFolderModal from "../../components/folders/AddFolderModal/AddFolderModal";
import EditFolderModal from "../../components/folders/EditFolderModal/EditFolderModal";
import Folders from "../../components/folders/Folders";
import Loading from "../../components/Loading";
import ToastMessage from "../../components/ToastMessage";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import { getAllFolders } from "../../redux/apiRequest/folderRequest";
import { getAllLessons } from "../../redux/apiRequest/lessonRequest";
import "./EnglishPage.scss";

function EnglishPage() {
  const dispatch = useDispatch();
  const { showToast } = useSelector((state) => state.utils);
  const folderState = useSelector((state) => state.folder);
  const { user } = useSelector((state) => state.auth);
  const [isOpenAddModal, setOpenAddModal] = useState(false);

  const fetchData = async () => {
    await getAllLessons(dispatch);
    await getAllFolders(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="english-page">
      <Breadcrumb className="ms-4 mt-3">
        <Breadcrumb.Item>
          <Link to="/study">Study</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>English</Breadcrumb.Item>
      </Breadcrumb>
      {user.isAdmin && (
        <>
          <Button
            className="add-btn"
            variant="outline-light"
            onClick={() => setOpenAddModal(true)}
          >
            <img src={addBtn} alt="add-btn" width={50} />
          </Button>

          <AddFolderModal
            isOpenAddModal={isOpenAddModal}
            setOpenAddModal={setOpenAddModal}
          />
          <EditFolderModal />
          {showToast.isShow && <ToastNotification />}
        </>
      )}

      <Folders />
      {folderState.isFetching && <Loading />}
    </div>
  );
}

export default EnglishPage;
