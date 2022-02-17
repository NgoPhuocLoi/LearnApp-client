import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function ToastMessage({ showToast, setShowToast }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        bg={showToast.type}
        show={showToast.isShow}
        onClose={() => setShowToast({ type: "", message: "", isShow: false })}
        autohide
        delay={3000}
      >
        <Toast.Header>
          <strong className="me-auto">Learn App</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>{showToast.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastMessage;
