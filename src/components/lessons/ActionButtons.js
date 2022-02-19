import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import doBtn from "../../assets/play-btn.svg";
import editBtn from "../../assets/pencil.svg";
import deleteBtn from "../../assets/trash.svg";
import checkBtn from "../../assets/check-circle.svg";
import checkFillBtn from "../../assets/check-circle-fill.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLesson } from "../../redux/apiRequest";
import {
  showUpdateModal,
  updateUpdatedLesson,
  addDoneLesson,
  removeDoneLesson,
} from "../../redux/lessonSlice";

function ActionButtons({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allLessons = useSelector((state) => state.lesson.allLessons);
  const doneLessons = useSelector((state) => state.lesson.doneLessons);
  const handleDeleteLesson = (id) => {
    deleteLesson(dispatch, id);
  };

  const handleWhenClickEditBtn = () => {
    const lessonClickedToUpdate = allLessons.find(
      (lesson) => lesson._id === id
    );
    dispatch(updateUpdatedLesson(lessonClickedToUpdate));
    dispatch(showUpdateModal(true));
  };

  useEffect(() => {
    localStorage.setItem("doneLessons", JSON.stringify(doneLessons));
  }, [doneLessons]);

  const handleChangeDoneLesson = () => {
    doneLessons.includes(id)
      ? dispatch(removeDoneLesson(id))
      : dispatch(addDoneLesson(id));
  };
  return (
    <div className="mt-2">
      <Button
        variant="outline-light"
        className="ms-2"
        onClick={() => navigate(`/english/${id}`)}
      >
        <img src={doBtn} alt="btn" width={"28"} />
      </Button>
      <Button
        variant="outline-light"
        className="ms-2"
        onClick={handleWhenClickEditBtn}
      >
        <img src={editBtn} alt="btn" width={"28"} />
      </Button>
      <Button variant="outline-light" className="ms-2">
        <img
          src={deleteBtn}
          alt="btn"
          width={"28"}
          onClick={() => handleDeleteLesson(id)}
        />
      </Button>
      <Button
        variant="outline-light"
        className="ms-2"
        onClick={handleChangeDoneLesson}
      >
        <img
          src={doneLessons.includes(id) ? checkFillBtn : checkBtn}
          alt="btn"
          width={"28"}
        />
      </Button>
    </div>
  );
}

export default ActionButtons;
