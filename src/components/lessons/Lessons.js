import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleLesson from "./SingleLesson";

function Lessons({ type }) {
  const lessonState = useSelector((state) => state.lesson);
  return (
    <Row className="mx-2 mt-2">
      {lessonState.allLessons?.map((lesson) =>
        type === "ALL" ? (
          <Col md={3} sm={4} className="mt-3" key={lesson._id}>
            <SingleLesson
              title={lesson.title}
              id={lesson._id}
              type={lesson.type}
            />
          </Col>
        ) : (
          lesson.type === type && (
            <Col md={3} sm={4} className="mt-3" key={lesson._id}>
              <SingleLesson
                title={lesson.title}
                id={lesson._id}
                type={lesson.type}
              />
            </Col>
          )
        )
      )}
    </Row>
  );
}

export default Lessons;
