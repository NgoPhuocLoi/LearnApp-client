import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import addBtn from "../assets/plus-circle-fill.svg";
import AddLessonModal from "../components/lessons/AddLessonModal";
import EditLessonModal from "../components/lessons/EditLessonModal";
import Lessons from "../components/lessons/Lessons";
import SingleLesson from "../components/lessons/SingleLesson";
import Loading from "../components/Loading";
import TabList from "../components/TabList";
import ToastMessage from "../components/ToastMessage";
import { getAllLessons } from "../redux/apiRequest";

function EnglishPage() {
  const dispatch = useDispatch();
  const lessonState = useSelector((state) => state.lesson);
  const [isOpenAddModal, setOpenAddModal] = useState(false);
  const [showToast, setShowToast] = useState({
    type: "",
    message: "",
    isShow: false,
  });
  const [lessonType, setLessonType] = useState("ALL");

  useEffect(() => {
    getAllLessons(dispatch);
  }, []);

  return (
    <>
      <TabList setLessonType={setLessonType} />
      <Lessons type={lessonType} />
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
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <EditLessonModal setShowToast={setShowToast} />
      <ToastMessage showToast={showToast} setShowToast={setShowToast} />
      {lessonState.isFetching && <Loading />}
    </>
  );
}

export default EnglishPage;
