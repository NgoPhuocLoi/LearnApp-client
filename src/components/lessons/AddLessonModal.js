import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addLesson, getAllLessons } from "../../redux/apiRequest/lessonRequest";
import { setShowToast } from "../../redux/slices/utilsSlice";

function AddLessonModal({ isOpenAddModal, setOpenAddModal }) {
  const dispatch = useDispatch();
  const { currentFolder } = useSelector((state) => state.folder);

  const [addLessonForm, setAddLessonForm] = useState({
    title: "",
    driveUrl: "",
    formUrl: "",
    type: "READING",
  });
  const handleClose = () => {
    setOpenAddModal(false);
    setAddLessonForm({
      title: "",
      driveUrl: "",
      formUrl: "",
      type: "READING",
    });
  };

  const handleOnchangeAddLessonForm = (e) => {
    setAddLessonForm({
      ...addLessonForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAddLesson = async () => {
    const success = await addLesson(dispatch, {
      ...addLessonForm,
      folder: currentFolder.id,
    });
    handleClose();
    if (success) {
      dispatch(
        setShowToast({
          type: "success",
          message: "Add successfully!!!",
          isShow: true,
        })
      );
    } else {
      dispatch(
        setShowToast({
          type: "danger",
          message: "Add Failed. PLease try again!!!",
          isShow: true,
        })
      );
    }

    setTimeout(() => {
      dispatch(
        setShowToast({
          type: "",
          message: "",
          isShow: false,
        })
      );
    }, 2000);
    getAllLessons(dispatch);
  };
  return (
    <Modal show={isOpenAddModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Lesson</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={addLessonForm.title}
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
              value={addLessonForm.driveUrl}
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
              value={addLessonForm.formUrl}
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
        <Button variant="primary" onClick={handleSubmitAddLesson}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddLessonModal;
