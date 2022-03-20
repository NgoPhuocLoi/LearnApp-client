import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/apiRequest/authRequest";
import DefaultAvatar from "../../user/DefaultAvatar/DefaultAvatar";
import "./UserMenu.scss";

const UserMenu = ({ setShowUserMenu }) => {
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

  const handleNavigate = () => {
    setShowUserMenu(false);
    navigate("/setting");
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
        <li className="user-menu__item" onClick={handleNavigate}>
          <Link to="/">Info</Link>
        </li>
        <li className="user-menu__item" onClick={handleLogoutUser}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
