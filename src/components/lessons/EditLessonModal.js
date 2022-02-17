import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addLesson, getAllLessons, updateLesson } from "../../redux/apiRequest";
import { showUpdateModal, updateUpdatedLesson } from "../../redux/lessonSlice";

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
    });
  }, [updatedLesson]);
  const handleClose = () => {
    dispatch(showUpdateModal(false));
    dispatch(
      updateUpdatedLesson({
        title: "",
        driveUrl: "",
        formUrl: "",
      })
    );
  };

  const handleOnchangeAddLessonForm = (e) => {
    setEditLessonForm({
      ...editLessonForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAddLesson = async () => {
    const success = await updateLesson(
      dispatch,
      updatedLesson._id,
      editLessonForm
    );
    console.log("success", success);
    handleClose();
    if (success) {
      setShowToast({
        type: "success",
        message: "Updated successfully!!!",
        isShow: true,
      });
    } else {
      setShowToast({
        type: "danger",
        message: "Updated Failed. PLease try again!!!",
        isShow: true,
      });
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
            <Form.Label>Google Drive Url</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.driveUrl}
              name="driveUrl"
              type="text"
              placeholder="Enter Google Drive Url"
            />
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Google Form Url</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={editLessonForm.formUrl}
              name="formUrl"
              type="text"
              placeholder="Enter Google Form Url"
            />
            <Form.Text className="text-muted">Required</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitAddLesson}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditLessonModal;
