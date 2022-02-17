import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import EnglishPage from "./views/EnglishPage";
import EnglishTest from "./views/EnglishTest";
import UnsupportedPage from "./views/UnsupportedPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/english/:id" element={<EnglishTest />} />
        <Route path="/math" element={<UnsupportedPage />} />
        <Route path="/program" element={<UnsupportedPage />} />
      </Routes>
    </div>
  );
}

export default App;
