import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import { loadUser } from "./redux/apiRequest/authRequest";
import {
  AuthPage,
  EnglishPage,
  EnglishTest,
  HomePage,
  SettingPage,
  UnsupportedPage,
} from "./views";
import FolderLanding from "./views/folder/FolderLanding";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    loadUser(dispatch);
  }, []);
  return (
    <div className="App">
      {isAuthenticated && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />

        <Route
          path="/english"
          element={
            <ProtectedRoute>
              <EnglishPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/english/folder/:id"
          element={
            <ProtectedRoute>
              <FolderLanding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/english/:id"
          element={
            <ProtectedRoute>
              <EnglishTest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/math"
          element={
            <ProtectedRoute>
              <UnsupportedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/program"
          element={
            <ProtectedRoute>
              <UnsupportedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <SettingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
