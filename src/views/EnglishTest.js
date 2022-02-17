import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EnglishTest() {
  const { id } = useParams();
  const allLessons = useSelector((state) => state.lesson.allLessons);
  const currentLesson = allLessons.find((lesson) => lesson._id === id);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  document.onresize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
    console.log(123);
  };
  return (
    <div className="test-container">
      <iframe
        title="1"
        className="frame-1"
        src={currentLesson.driveUrl}
      ></iframe>

      <iframe
        title="2"
        className="frame-2"
        src={currentLesson.formUrl}
      ></iframe>
    </div>
  );
}

export default EnglishTest;
