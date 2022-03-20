import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/apiRequest/authRequest";
import { Spinner } from "react-bootstrap";
import { resetErrorMsg } from "../../../redux/slices/authSlice";
function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, errorMsg, isFetching } = useSelector((state) => state.auth);
  const [userRegisterForm, setUserRegisterForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const { username, password, passwordConfirm } = userRegisterForm;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserRegisterForm({ ...userRegisterForm, [name]: value });
  };

  const handleSubmitRegisterUser = async (e) => {
    e.preventDefault();

    try {
      const success = await registerUser(dispatch, {
        ...userRegisterForm,
        displayName: username,
      });
      if (success) {
        navigate("/login");
        resetErrorMsg("");
      }
    } catch (error) {
      console.log("error", error);
    }

    setUserRegisterForm({
      username: "",
      password: "",
      passwordConfirm: "",
    });
  };
  return (
    <div className="form-container">
      <h2 className="form__title">Register</h2>
      <form className="form">
        <div className="form__group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChangeInput}
            value={username}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeInput}
            value={password}
          />
        </div>
        <div className="form__group">
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password"
            onChange={handleChangeInput}
            value={passwordConfirm}
          />
        </div>

        <button className="form__button" onClick={handleSubmitRegisterUser}>
          {isFetching ? <Spinner animation="border" /> : "Register"}
        </button>
        {error && <h3 className="message">{errorMsg}</h3>}
      </form>

      <div className="change-type-container">
        <p>You already have an account?</p>
        <p
          className="form__button-login"
          onClick={() => {
            navigate("/login");
            dispatch(resetErrorMsg(""));
          }}
        >
          Login
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
