import React from "react";
import { useSelector } from "react-redux";
import "./ToastNotification.scss";

const ToastNotification = () => {
  const { showToast } = useSelector((state) => state.utils);
  return <div className="toast-container">{showToast.message}</div>;
};

export default ToastNotification;
