import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../../assets/list.svg";
import logo from "../../../assets/logo.png";
import { logout } from "../../../redux/apiRequest/authRequest";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutUser = () => {
    logout(dispatch);
    navigate("/login");
  };
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
          <li className="header__nav-item">
            <Link to="/">Home</Link>
            <div></div>
          </li>
          <li className="header__nav-item">
            <Link to="/english">English</Link>
            <div></div>
          </li>
          <li className="header__nav-item">
            <Link to="/math">Math</Link>
            <div></div>
          </li>
          <li className="header__nav-item">
            <Link to="/program">Program</Link>
            <div></div>
          </li>
        </ul>
        <div className="header-actions">
          {/* <Link to="/login" className="header-actions__btn login">
          Login
        </Link> */}
          <button
            className="header-actions__btn logout"
            onClick={handleLogoutUser}
          >
            Logout
          </button>

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
