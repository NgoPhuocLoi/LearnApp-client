import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import times from "../../../../assets/icon/x.svg";
import {
  deleteCourse,
  getAllCourses,
} from "../../../../redux/apiRequest/courseRequest";
import { setCourseEdited } from "../../../../redux/slices/courseSlice";
import {
  setOpenAddCourseModal,
  setOpenEditCourseModal,
} from "../../../../redux/slices/pageSlice";
import "./Courses.scss";

const Courses = () => {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state) => state.course);

  useEffect(() => {
    getAllCourses(dispatch);
  }, []);

  const handleOpenCourseModal = (type) => {
    dispatch(
      type === "add"
        ? setOpenAddCourseModal(true)
        : setOpenEditCourseModal(true)
    );
  };

  const handleDeleteCourse = async (id) => {
    deleteCourse(dispatch, id);
  };
  return (
    <>
      <div className="dashboard-page-container course-container">
        <div className="dashboard-page__header ">
          <h3 className="dashboard-page__header-title">Courses</h3>
          <div className="dashboard-page__header-actions">
            <button
              className="dashboard-page__header-btn"
              onClick={() => handleOpenCourseModal("add")}
            >
              Add course
            </button>
          </div>
        </div>

        <div className="page__content">
          <div className="list-course-container">
            <h4 className="list-course__title">Active</h4>
            <ul className="list-course">
              {allCourses.map(
                (course, index) =>
                  course.status === "active" && (
                    <li className="list-course__item" key={index}>
                      <div className="course-container">
                        <div className="course__thumb">
                          <img src={course.thumb} alt="english-icon" />
                        </div>
                        <h5 className="course__title">{course.name}</h5>
                        <p className="course__desc">{course.description}</p>
                      </div>
                      <div className="course-overlay">
                        <button className="course-overlay-btn dashboard">
                          Go to
                        </button>
                        <button
                          className="course-overlay-btn dashboard"
                          onClick={() => {
                            handleOpenCourseModal("edit");
                            dispatch(setCourseEdited(course));
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="course-overlay-delete-btn"
                          onClick={() => handleDeleteCourse(course._id)}
                        >
                          <img src={times} alt="icon" />
                        </button>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="list-course-container">
            <h4 className="list-course__title">Disabled</h4>
            <ul className="list-course">
              {allCourses.map(
                (course, index) =>
                  course.status === "disabled" && (
                    <li className="list-course__item can-not-learn" key={index}>
                      <div className="course-container">
                        <div className="course__thumb">
                          <img src={course.thumb} alt="english-icon" />
                        </div>
                        <h5 className="course__title">{course.name}</h5>
                        <p className="course__desc">{course.description}</p>
                      </div>
                      <div className="course-overlay">
                        <button className="course-overlay-btn dashboard">
                          Go to
                        </button>
                        <button
                          className="course-overlay-btn dashboard"
                          onClick={() => {
                            handleOpenCourseModal("edit");
                            dispatch(setCourseEdited(course));
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="course-overlay-delete-btn"
                          onClick={() => handleDeleteCourse(course._id)}
                        >
                          <img src={times} alt="icon" />
                        </button>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* <ToastNotification showToast={showToast} /> */}
    </>
  );
};

export default Courses;
