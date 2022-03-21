import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginForm, RegisterForm, WaitingLoad } from "../../../components/auth";
import "./AuthPage.scss";
function LoginPage({ type }) {
  const { isAuthenticated, isFetching } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="landing-background app__flex">
      {isFetching ? (
        <WaitingLoad />
      ) : type === "login" ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
}

export default LoginPage;
