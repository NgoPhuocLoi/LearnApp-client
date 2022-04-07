import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import logo from "../../assets/logo.png";
import {
  dashboardIcon,
  arrowRight,
  userIcon,
  bookIcon,
  fullscreenIcon,
  settingIcon,
  bell,
  menuIcon,
  moon,
  resizeMenuIcon,
} from "../../assets/dashboard-icon";
import { courses } from "../courses";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCourseModal,
  EditCourseModal,
} from "./components/Courses/components";
import {
  setOpenAddCourseModal,
  setOpenEditCourseModal,
} from "../../redux/slices/pageSlice";
import Loading from "../../components/Loading";
import UserMenu from "../../components/layout/UserMenu/UserMenu";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { openAddCourseModal, openEditCourseModal } = useSelector(
    (state) => state.page.dashboard
  );
  const { isFetching } = useSelector((state) => state.course);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".dashboard-left__item");

    const handleChooseItem = (e) => {
      document
        .querySelector(".dashboard-left__item.active")
        .classList.remove("active");
      e.target.classList.add("active");
    };

    items.forEach((item) => {
      item.addEventListener("click", handleChooseItem);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", handleChooseItem);
      });
    };
  }, []);

  useEffect(() => navigate("courses"), []);

  const handleCloseCourseModal = (type) => {
    dispatch(
      type === "add"
        ? setOpenAddCourseModal(false)
        : setOpenEditCourseModal(false)
    );
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="dashboard-left__header">
            <img src={logo} alt="logo" />
            Olearnil
          </div>

          <ul className="dashboard-left__list">
            <li
              className="dashboard-left__item active"
              onClick={() => navigate("courses")}
            >
              {" "}
              <img src={dashboardIcon} alt="icon" />
              Courses
              <img src={arrowRight} alt="icon" className="arrow-icon" />
            </li>
            <li
              className="dashboard-left__item"
              onClick={() => navigate("users")}
            >
              {" "}
              <img src={userIcon} alt="icon" />
              Users
              <img src={arrowRight} alt="icon" className="arrow-icon" />
            </li>

            <li className="dashboard-left__item--title">courses</li>

            {courses.map((course, index) => (
              <li className="dashboard-left__item" key={index}>
                {" "}
                <img src={bookIcon} alt="icon" />
                {course.name}
                <img src={arrowRight} alt="icon" className="arrow-icon" />
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-right__header">
            <ul className="dashboard-right__header-list">
              <li className="dashboard-right__header-item">
                <img src={resizeMenuIcon} alt="icon" />
              </li>
              <li className="dashboard-right__header-item">
                <img src={resizeMenuIcon} alt="icon" />
              </li>
              <li className="dashboard-right__header-item">
                <img src={fullscreenIcon} alt="icon" />
              </li>
              <li className="dashboard-right__header-item">
                <img src={bell} alt="icon" />
              </li>
              <li className="dashboard-right__header-item">
                <img src={resizeMenuIcon} alt="icon" />
              </li>
              <li
                className="dashboard-right__header-item--avatar"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <img
                  src={user?.avatar}
                  alt="user-avatar"
                  className="avatar-img"
                />
                {showUserMenu && (
                  <UserMenu setShowUserMenu={setShowUserMenu} dashboard />
                )}
              </li>

              <li className="dashboard-right__header-item">
                <img src={settingIcon} alt="icon" />
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>

      {openAddCourseModal && (
        <div
          className="course-modal-overlay"
          onClick={() => handleCloseCourseModal("add")}
        >
          <AddCourseModal />
        </div>
      )}
      {openEditCourseModal && (
        <div
          className="course-modal-overlay"
          onClick={() => handleCloseCourseModal("edit")}
        >
          <EditCourseModal />
        </div>
      )}

      {isFetching && <Loading />}
    </>
  );
};

export default Dashboard;
