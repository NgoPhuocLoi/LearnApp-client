import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-list">
        <li className="footer-item">
          <h4 className="footer-item__title">
            <img src={logo} alt="logo" />
            OLearnil
          </h4>
          <ul className="footer-item__contents">
            <li className="footer-item__content">Introduce</li>
            <li className="footer-item__content">
              Email: contact.olearnil@gmail.com
            </li>
            <li className="footer-item__content">Address: Can Tho</li>
          </ul>
        </li>
        <li className="footer-item">
          <h4 className="footer-item__title">About Admin</h4>
          <ul className="footer-item__contents">
            <li className="footer-item__content">Name: Ngô Phước Lợi</li>

            <li className="footer-item__content">
              Phone: <a href="tel:079.686.3758">0796863758</a>
            </li>
            <li className="footer-item__content">
              <a
                href="https://www.facebook.com/phuocloi.ngo.988"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="footer-item__content">
              <a href="https://github.com/NgoPhuocLoi" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </li>
        <li className="footer-item">
          <h4 className="footer-item__title">Support</h4>
          <ul className="footer-item__contents">
            <li className="footer-item__content">Contact</li>
            <li className="footer-item__content">Security</li>
            <li className="footer-item__content">Rules</li>
          </ul>
        </li>
        <li className="footer-item">
          <h4 className="footer-item__title">Courses</h4>
          <ul className="footer-item__contents">
            <li className="footer-item__content">
              <Link to="/english">English</Link>
            </li>
            <li className="footer-item__content">Chemical</li>
            <li className="footer-item__content">Physics</li>
            <li className="footer-item__content">Program</li>
            <li className="footer-item__content">Math</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
