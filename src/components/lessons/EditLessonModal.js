import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLessons,
  updateLesson,
} from "../../redux/apiRequest/lessonRequest";
import {
  showUpdateModal,
  updateUpdatedLesson,
} from "../../redux/slices/lessonSlice";

function EditLessonModal({ setShowToast }) {
  const dispatch = useDispatch();
  const updatedLesson = useSelector((state) => state.lesson.updatedLesson);
  const isShowUpdateModal = useSelector(
    (state) => state.lesson.isShowUpdateModal
  );

  const [editLessonForm, setEditLessonForm] = useState(updatedLesson);
  useEffect(() => {
    setEditLessonForm({
      title: updatedLesson.title,
      formUrl: updatedLesson.formUrl,
      driveUrl: updatedLesson.driveUrl,
      type: updatedLesson.type,
    });
  }, [updatedLesson]);
  const handleClose = () => {
    dispatch(showUpdateModal(false));
    dispatch(
      updateUpdatedLesson({
        title: "",
        driveUrl: "",
        formUrl: "",
        type: "READING",
      })
    );
  };

  const handleOnchangeAddLessonForm = (e) => {
    setEditLessonForm({
      ...editLessonForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEditLesson = async () => {
    const success = await updateLesson(
      dispatch,
      updatedLesson._id,
      editLessonForm
    );
    handleClose();
    if (success) {
      setShowToast({
        type: "success",
        message: "Updated successfully!!!",
        isShow: true,
      });

      setTimeout(() => {
        setShowToast({
          type: "",
          message: "",
          isShow: true,
        });
      }, 2000);
    } else {
      setShowToast({
        type: "danger",
        message: "Updated Failed. PLease try again!!!",
        isShow: true,
      });

      setTimeout(() => {
        setShowToast({
          type: "",
          message: "",
          isShow: true,
        });
      }, 2000);
    }
    getAllLessons(dispatch);
  };
  return (
    <Modal show={isShowUpdateModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Lesson</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Google Drive URL</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.driveUrl}
              name="driveUrl"
              type="text"
              placeholder="Enter Google Drive URL"
            />
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Google Form URL</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.formUrl}
              name="formUrl"
              type="text"
              placeholder="Enter Google Form URL"
            />
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="type"
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.type}
            >
              <option value="READING">Reading</option>
              <option value="LISTENING">Listening</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitEditLesson}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditLessonModal;
