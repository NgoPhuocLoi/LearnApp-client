import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addLesson, getAllLessons } from "../../redux/apiRequest/lessonRequest";

function AddLessonModal({ isOpenAddModal, setOpenAddModal, setShowToast }) {
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
      setShowToast({
        type: "success",
        message: "Add successfully!!!",
        isShow: true,
      });
    } else {
      setShowToast({
        type: "danger",
        message: "Add Failed. PLease try again!!!",
        isShow: true,
      });
    }
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
            <Form.Label>Google Drive Url</Form.Label>
            <Form.Control
              onChange={handleOnchangeAddLessonForm}
              value={addLessonForm.driveUrl}
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
              value={addLessonForm.formUrl}
              name="formUrl"
              type="text"
              placeholder="Enter Google Form Url"
            />
            <Form.Text className="text-muted">Required</Form.Text>
            <Form.Select
              aria-label="Default select example"
              className="mt-3"
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
