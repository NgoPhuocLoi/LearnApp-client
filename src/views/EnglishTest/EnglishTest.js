import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./EnglishTest.scss";
function EnglishTest() {
  const { id } = useParams();
  const allLessons = useSelector((state) => state.lesson.allLessons);
  const currentLesson = allLessons.find((lesson) => lesson._id === id);

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
