import React from "react";
import { useSelector } from "react-redux";
import "./DefaultAvatar.scss";

const DefaultAvatar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="avatar-container">
      {user?.username.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default DefaultAvatar;
