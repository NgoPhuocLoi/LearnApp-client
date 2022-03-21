import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/apiRequest/authRequest";
import { resetErrorMsg } from "../../../redux/slices/authSlice";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, errorMsg, isFetching } = useSelector((state) => state.auth);
  const [userLoginForm, setUserLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserLoginForm({ ...userLoginForm, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await loginUser(dispatch, userLoginForm);
      if (success) {
        navigate("/");
        resetErrorMsg("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="form-container">
      <h2 className="form__title">Login</h2>
      <form className="form">
        <div className="form__group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeInput}
          />
        </div>

        <button
          className="form__button form__button-login"
          onClick={handleSubmitLogin}
        >
          Login
        </button>
        {error && <h3 className="message">{errorMsg}</h3>}
      </form>

      <div className="change-type-container">
        <p>Don't have an account?</p>
        <p
          className="form__button-login"
          onClick={() => {
            navigate("/register");
            dispatch(resetErrorMsg(""));
          }}
        >
          Register
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
