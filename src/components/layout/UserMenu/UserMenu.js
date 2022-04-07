import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/apiRequest/authRequest";
import {
  setCurrentPage,
  setInDashboard,
} from "../../../redux/slices/pageSlice";
import DefaultAvatar from "../../user/DefaultAvatar/DefaultAvatar";
import "./UserMenu.scss";

const UserMenu = ({ setShowUserMenu, dashboard }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOverlay = () => {
      setShowUserMenu(false);
    };

    document
      .querySelector("body")
      .addEventListener("click", handleClickOverlay);

    return () => {
      document
        .querySelector("body")
        .removeEventListener("click", handleClickOverlay);
    };
  }, []);

  const handleLogoutUser = () => {
    logout(dispatch);
    navigate("/login");
  };

  const handleNavigate = (path) => {
    if (path === "/dashboard") {
      dispatch(setInDashboard(true));
    }
    setShowUserMenu(false);
    navigate(path);
    dispatch(setCurrentPage(-1));
  };

  return (
    <div className="user-menu-container" onClick={(e) => e.stopPropagation()}>
      <div className="user-menu__user">
        {user.avatar ? (
          <img className="user-menu__ava" src={user.avatar} alt="user-avatar" />
        ) : (
          <div className="user-menu__ava">
            <DefaultAvatar />
          </div>
        )}

        <div className="user-menu__info">
          <h3 className="user-menu__display-name">{user.displayName}</h3>
          <p className="user-menu__username">{user.username}</p>
        </div>
      </div>
      <ul className="user-menu__list">
        <li
          className="user-menu__item"
          onClick={() => handleNavigate("/setting")}
        >
          <p>Info</p>
        </li>
        {user.isAdmin &&
          (dashboard ? (
            <li
              className="user-menu__item"
              onClick={() => {
                handleNavigate("/");
                dispatch(setInDashboard(false));
                dispatch(setCurrentPage(0));
              }}
            >
              <p>User view</p>
            </li>
          ) : (
            <li
              className="user-menu__item"
              onClick={() => handleNavigate("/dashboard")}
            >
              <p>Dashboard</p>
            </li>
          ))}
        <li className="user-menu__item" onClick={handleLogoutUser}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
