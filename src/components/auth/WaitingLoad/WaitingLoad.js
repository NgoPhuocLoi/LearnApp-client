import React from "react";
import "./WaitingLoad.scss";
import yotaro from "../../../assets/yorato.png";
import { Spinner } from "react-bootstrap";

const WaitingLoad = () => {
  return (
    <div className="waiting-container">
      <div className="waiting-content">
        <img src={yotaro} alt="yotaro-img" className="waiting-img" />
        {/* <p className="waiting-message">Đợi xíu nha Server đang chạy</p> */}
      </div>
      <Spinner animation="border" variant="white" />
    </div>
  );
};

export default WaitingLoad;
