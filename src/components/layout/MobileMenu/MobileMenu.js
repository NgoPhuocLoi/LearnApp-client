import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/apiRequest/authRequest";
import "./MobileMenu.scss";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutUser = () => {
    logout(dispatch);
    Navigate("/login");
  };
  return (
    <div className={showMenu ? "mb-menu active" : "mb-menu"}>
      <div
        className="mb-menu__overlay"
        onClick={() => setShowMenu(!showMenu)}
      ></div>
      <div className="mb-menu-container">
        <h3 className="welcome-text">Welcome Admin</h3>
        <ul className="mb-menu__list">
          <Link
            to={"/"}
            className="mb-menu__item"
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
            <div></div>
          </Link>
          <Link
            to={"/english"}
            className="mb-menu__item"
            onClick={() => setShowMenu(!showMenu)}
          >
            English
            <div></div>
          </Link>
          <Link
            to={"/math"}
            className="mb-menu__item"
            onClick={() => setShowMenu(!showMenu)}
          >
            Math
            <div></div>
          </Link>
          <Link
            to={"/program"}
            className="mb-menu__item"
            onClick={() => setShowMenu(!showMenu)}
          >
            Program
            <div></div>
          </Link>
          <button className="mb-menu__logout-btn" onClick={handleLogoutUser}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
