import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./EnglishTest.scss";
function EnglishTest() {
  const { id } = useParams();
  const { currentFolder } = useSelector((state) => state.folder);
  const allLessons = useSelector((state) => state.lesson.allLessons);
  const currentLesson = allLessons.find((lesson) => lesson._id === id);

  return (
    <>
      <Breadcrumb className="mt-3 ms-4">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/english">English</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/english/folder/${currentFolder._id}`}>
            {currentFolder.title}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{currentLesson.title}</Breadcrumb.Item>
      </Breadcrumb>
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
    </>
  );
}

export default EnglishTest;
