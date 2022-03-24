import React from "react";
import "./StudyPage.scss";

import { courses } from "./courses";
import { useNavigate } from "react-router-dom";

const StudyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="study-page__container">
      <div className="page__header ">
        <h2 className="page__header-title">Study</h2>
        <p className="page__header-desc">
          You can learn subjects like english, math, programming, chemistry, ...
          here.
        </p>
      </div>

      <div className="page__content">
        <div className="list-course-container">
          <h4 className="list-course__title">You can learn</h4>
          <ul className="list-course">
            {courses.map(
              (course, index) =>
                course.canLearn && (
                  <li className="list-course__item" key={index}>
                    <div className="course-container">
                      <div className="course__thumb">
                        <img src={course.thumb} alt="english-icon" />
                      </div>
                      <h5 className="course__title">{course.name}</h5>
                      <p className="course__desc">{course.description}</p>
                    </div>
                    <div
                      className="course-overlay"
                      onClick={() => navigate(course.path)}
                    >
                      <button className="course-overlay-btn">Study Now</button>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="list-course-container">
          <h4 className="list-course__title">Being built</h4>
          <ul className="list-course">
            {courses.map(
              (course, index) =>
                !course.canLearn && (
                  <li className="list-course__item can-not-learn" key={index}>
                    <div className="course-container">
                      <div className="course__thumb">
                        <img src={course.thumb} alt="english-icon" />
                      </div>
                      <h5 className="course__title">{course.name}</h5>
                      <p className="course__desc">{course.description}</p>
                    </div>
                    <div className="course-overlay">
                      <button className="course-overlay-btn">
                        Can't Learn
                      </button>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
