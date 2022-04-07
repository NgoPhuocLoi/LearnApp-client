import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createFolder } from "../../../redux/apiRequest/folderRequest";
import { setShowToast } from "../../../redux/slices/utilsSlice";

const AddFolderModal = ({ isOpenAddModal, setOpenAddModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleClose = () => {
    setTitle("");
    setOpenAddModal(false);
  };

  const handleCreateFolder = async () => {
    const success = await createFolder(dispatch, { title });
    handleClose();
    if (success) {
      dispatch(
        setShowToast({
          type: "success",
          message: "Create successfully",
          isShow: true,
        })
      );
    } else {
      dispatch(
        setShowToast({
          type: "fail",
          message: "Create failed. Try again!",
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
  };
  return (
    <Modal show={isOpenAddModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">Required</Form.Text>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateFolder}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFolderModal;
