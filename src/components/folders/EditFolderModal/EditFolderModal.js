import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { renameFolder } from "../../../redux/apiRequest/folderRequest";
import { setShowEditFolderModal } from "../../../redux/slices/folderSlice";

const EditFolderModal = () => {
  const dispatch = useDispatch();
  const { showEditFolderModal, editedFolder } = useSelector(
    (state) => state.folder
  );
  const [title, setTitle] = useState(editedFolder.title);
  const handleClose = () => {
    setTitle("");
    dispatch(setShowEditFolderModal(false));
  };

  const handleEditFolder = async () => {
    await renameFolder(dispatch, { title }, editedFolder._id);
    handleClose();
  };
  return (
    <Modal show={showEditFolderModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rename Folder</Modal.Title>
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
        <Button variant="primary" onClick={handleEditFolder}>
          Rename
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditFolderModal;
