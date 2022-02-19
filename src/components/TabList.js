import React from "react";
import layout1 from "../assets/layout-text-sidebar-reverse.svg";
import layout2 from "../assets/grid-3x2.svg";

function TabList({ setLessonType, layout, setLayout }) {
  const handleChangeTab = (e) => {
    setLessonType(e.target.getAttribute("type"));
    document.querySelector("button.active").classList.remove("active");
    e.target.classList.add("active");
  };

  const handleChangeLayout = () => {
    layout === 1 ? setLayout(2) : setLayout(1);
  };
  return (
    <ul className="tab-list">
      <div className="d-flex">
        <li className="tab-item">
          <button onClick={handleChangeTab} type="ALL" className="active">
            All
          </button>
        </li>
        <li className="tab-item">
          <button onClick={handleChangeTab} type="LISTENING">
            Listening
          </button>
        </li>
        <li className="tab-item">
          <button onClick={handleChangeTab} type="READING">
            Reading
          </button>
        </li>
        <li className="tab-item">
          <button onClick={handleChangeTab} type="COMPLETE">
            Complete
          </button>
        </li>
        <li className="tab-item">
          <button onClick={handleChangeTab} type="NOT COMPLETE">
            Not Complete
          </button>
        </li>
      </div>

      {window.innerWidth > 800 && (
        <img
          src={layout === 1 ? layout1 : layout2}
          alt="img-layout"
          style={{ cursor: "pointer" }}
          width={25}
          onClick={handleChangeLayout}
        />
      )}
    </ul>
  );
}

export default TabList;
