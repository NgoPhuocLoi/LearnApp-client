import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginForm, RegisterForm } from "../../../components/auth";
import "./AuthPage.scss";
function LoginPage({ type }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="landing-background   app__flex">
      {type === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default LoginPage;
