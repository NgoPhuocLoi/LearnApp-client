import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../../assets/list.svg";
import logo from "../../../assets/logo.png";
import DefaultAvatar from "../../user/DefaultAvatar/DefaultAvatar";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserMenu from "../UserMenu/UserMenu";
import "./Header.scss";

const pages = [
  { name: "Home", path: "/" },
  { name: "English", path: "/english" },
  { name: "Math", path: "/math" },
  { name: "Program", path: "/program" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <header className="header-container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__logo-slogan">
            <h3>OLearnil</h3>
            <p>Study to become better</p>
          </div>
        </div>
        <ul className="header__nav">
          {pages.map((page, index) => (
            <li
              className={
                currentPage === index
                  ? "header__nav-item active"
                  : "header__nav-item"
              }
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              <Link to={page.path}>{page.name}</Link>
              <div></div>
            </li>
          ))}
        </ul>
        <div className="header-actions">
          {/* <Link to="/login" className="header-actions__btn login">
          Login
        </Link> */}
          {/* <button
            className="header-actions__btn logout"
            onClick={handleLogoutUser}
          >
            Logout
          </button> */}

          {user?.avatar ? (
            <img
              className="header-actions__avatar"
              src={user?.avatar}
              onClick={() => setShowUserMenu(!showUserMenu)}
            />
          ) : (
            <div
              className="header-actions__avatar"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <DefaultAvatar />
            </div>
          )}

          {showUserMenu && (
            <UserMenu
              setShowUserMenu={setShowUserMenu}
              setCurrentPage={setCurrentPage}
            />
          )}

          <img
            src={menuIcon}
            alt="menu-icon"
            className="header-actions__open-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </header>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      {/* {showMenu && <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />} */}
    </>
  );
};

export default Header;
