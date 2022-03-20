import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/apiRequest/authRequest";
import DefaultAvatar from "../../user/DefaultAvatar/DefaultAvatar";
import "./MobileMenu.scss";

const pages = [
  { name: "Home", path: "/" },
  { name: "English", path: "/english" },
  { name: "Math", path: "/math" },
  { name: "Program", path: "/program" },
  { name: "Setting", path: "/setting" },
];

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
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
        <div className="mb-menu__user-info">
          <h3 className="welcome-text">Welcome {user?.displayName}</h3>
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="user-avatar"
              className="mb-menu__user-ava"
            />
          ) : (
            <div className="mb-menu__user-ava">
              <DefaultAvatar />
            </div>
          )}
        </div>
        <ul className="mb-menu__list">
          {pages.map((page, index) => (
            <Link
              to={page.path}
              className="mb-menu__item"
              onClick={() => setShowMenu(!showMenu)}
              key={index}
            >
              {page.name}
              <div></div>
            </Link>
          ))}

          <button className="mb-menu__logout-btn" onClick={handleLogoutUser}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
