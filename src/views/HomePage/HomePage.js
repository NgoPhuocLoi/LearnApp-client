import React from "react";
import "./HomePage.scss";
import homePageBanner from "../../assets/homePage-img.png";
import graduateHat from "../../assets/hat.png";
import arrowRight from "../../assets/arr-right.png";
import { useNavigate } from "react-router-dom";
import { setCurrentPage } from "../../redux/slices/pageSlice";
import { useDispatch } from "react-redux";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="home-page">
      <div className="home-page__banner">
        <div className="home-page__banner-left">
          <h2 className="home-page__banner-title">
            <span>
              Online <img src={graduateHat} alt="hat" />
            </span>
            <span>
              Education is easy now!
              <img src={arrowRight} alt="hat" />
            </span>
          </h2>
          <a
            href="#"
            className="home-page__banner-btn"
            onClick={() => {
              navigate("/study");
              dispatch(setCurrentPage(1));
            }}
          >
            Learn Now!
          </a>
        </div>
        <div className="home-page__banner-right">
          <img src={homePageBanner} alt="home-page-banner" />
        </div>
      </div>
      <div className="home-page__courses"></div>
    </div>
  );
}

export default HomePage;
