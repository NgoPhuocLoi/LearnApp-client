import React from "react";
import "./Users.scss";
import { userIcon } from "../../../../assets/dashboard-icon";

const Users = () => {
  return (
    <div className="dashboard-page-container user-container">
      <div className="dashboard-page__header ">
        <h3 className="dashboard-page__header-title">Users</h3>
        <div className="dashboard-page__header-actions">
          <button
            className="dashboard-page__header-btn"
            // onClick={() => handleOpenCourseModal("add")}
          >
            Add user
          </button>
        </div>
      </div>

      <ul className="user-statistics">
        <li className="user-statistics-item">
          <div className="user-statistics-thumb">
            <img src={userIcon} alt="user-icon" />
          </div>
          <div className="user-statistics-content">
            <h3>1234</h3>
            <p>Total users</p>
          </div>
        </li>
        <li className="user-statistics-item">
          <div className="user-statistics-thumb">
            <img src={userIcon} alt="user-icon" />
          </div>
          <div className="user-statistics-content">
            <h3>1234</h3>
            <p>Total users</p>
          </div>
        </li>
        <li className="user-statistics-item">
          <div className="user-statistics-thumb">
            <img src={userIcon} alt="user-icon" />
          </div>
          <div className="user-statistics-content">
            <h3>1234</h3>
            <p>Total users</p>
          </div>
        </li>
        <li className="user-statistics-item">
          <div className="user-statistics-thumb">
            <img src={userIcon} alt="user-icon" />
          </div>
          <div className="user-statistics-content">
            <h3>1234</h3>
            <p>Total users</p>
          </div>
        </li>
      </ul>

      <ul className="user-list">
        <li className="user-list__title"></li>
        <li className="user-item"></li>
      </ul>
    </div>
  );
};

export default Users;
