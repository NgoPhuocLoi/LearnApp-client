import React, { useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import addBtn from "../../assets/plus-circle-fill.svg";
import AddLessonModal from "../../components/lessons/AddLessonModal";
import EditLessonModal from "../../components/lessons/EditLessonModal";
import Lessons from "../../components/lessons/Lessons";
import Loading from "../../components/Loading";
import { TabList } from "../../components/layout";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import "./FolderLanding.scss";

const FolderLanding = () => {
  const { currentFolder } = useSelector((state) => state.folder);
  const [isOpenAddModal, setOpenAddModal] = useState(false);
  const lessonState = useSelector((state) => state.lesson);
  const { user } = useSelector((state) => state.user);
  const [lessonType, setLessonType] = useState("ALL");
  const [layout, setLayout] = useState(1);
  const { showToast } = useSelector((state) => state.utils);

  return (
    <div className="folder-landing">
      <Breadcrumb className="mt-3 ms-4">
        <Breadcrumb.Item>
          <Link to="/study">Study</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/english">English</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{currentFolder.title}</Breadcrumb.Item>
      </Breadcrumb>
      <TabList
        setLessonType={setLessonType}
        layout={layout}
        setLayout={setLayout}
      />
      <Lessons type={lessonType} layout={layout} />
      {user.isAdmin && (
        <>
          <Button
            className="add-btn"
            variant="outline-light"
            onClick={() => setOpenAddModal(true)}
          >
            <img src={addBtn} alt="add-btn" width={50} />
          </Button>
          <AddLessonModal
            isOpenAddModal={isOpenAddModal}
            setOpenAddModal={setOpenAddModal}
          />
          <EditLessonModal />
          {showToast.isShow && <ToastNotification />}
        </>
      )}
      {lessonState.isFetching && <Loading />}
    </div>
  );
};

export default FolderLanding;
