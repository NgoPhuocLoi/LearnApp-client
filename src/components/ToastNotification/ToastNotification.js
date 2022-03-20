import React from "react";
import "./ToastNotification.scss";

const ToastNotification = ({ showToast }) => {
  return <div className="toast-container">{showToast.message}</div>;
};

export default ToastNotification;
