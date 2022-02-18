import React from "react";

function TabList({ setLessonType }) {
  const handleChangeTab = (e) => {
    setLessonType(e.target.getAttribute("type"));
    document.querySelector("button.active").classList.remove("active");
    e.target.classList.add("active");
  };
  return (
    <ul className="tab-list">
      <li onClick={handleChangeTab} className="tab-item">
        <button type="ALL" className="active">
          All
        </button>
      </li>
      <li onClick={handleChangeTab} className="tab-item">
        <button type="LISTENING">Listening</button>
      </li>
      <li onClick={handleChangeTab} className="tab-item">
        <button type="READING">Reading</button>
      </li>
    </ul>
  );
}

export default TabList;
