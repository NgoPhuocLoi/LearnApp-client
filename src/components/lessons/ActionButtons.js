import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import checkFillBtn from "../../assets/check-circle-fill.svg";
import checkBtn from "../../assets/check-circle.svg";
import editBtn from "../../assets/pencil.svg";
import doBtn from "../../assets/play-btn.svg";
import deleteBtn from "../../assets/trash.svg";
import {
  deleteLesson,
  updateDoneLesson,
} from "../../redux/apiRequest/lessonRequest";
import {
  showUpdateModal,
  updateUpdatedLesson,
} from "../../redux/slices/lessonSlice";

function ActionButtons({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allLessons, doneLessons } = useSelector((state) => state.lesson);
  const { user } = useSelector((state) => state.auth);
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

  const handleChangeDoneLesson = () => {
    let type = doneLessons.includes(id) ? "remove" : "add";

    updateDoneLesson(dispatch, id, type);
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
      {user.isAdmin && (
        <>
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
        </>
      )}
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
