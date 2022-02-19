import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleLesson from "./SingleLesson";

function Lessons({ type, layout }) {
  const lessonState = useSelector((state) => state.lesson);
  const doneLessons = lessonState.doneLessons;
  return (
    <Row className="mx-2 mt-2">
      {lessonState.allLessons?.map((lesson) => {
        switch (type) {
          case "ALL":
            return (
              <Col
                md={layout === 1 ? 3 : 12}
                sm={4}
                className="mt-3"
                key={lesson._id}
              >
                <SingleLesson
                  title={lesson.title}
                  id={lesson._id}
                  type={lesson.type}
                />
              </Col>
            );
          case "COMPLETE":
            return (
              doneLessons.includes(lesson._id) && (
                <Col
                  md={layout === 1 ? 3 : 12}
                  sm={4}
                  className="mt-3"
                  key={lesson._id}
                >
                  <SingleLesson
                    title={lesson.title}
                    id={lesson._id}
                    type={lesson.type}
                  />
                </Col>
              )
            );
          case "NOT COMPLETE":
            return (
              !doneLessons.includes(lesson._id) && (
                <Col
                  md={layout === 1 ? 3 : 12}
                  sm={4}
                  className="mt-3"
                  key={lesson._id}
                >
                  <SingleLesson
                    title={lesson.title}
                    id={lesson._id}
                    type={lesson.type}
                  />
                </Col>
              )
            );
          default:
            return (
              lesson.type === type && (
                <Col
                  md={layout === 1 ? 3 : 12}
                  sm={4}
                  className="mt-3"
                  key={lesson._id}
                >
                  <SingleLesson
                    title={lesson.title}
                    id={lesson._id}
                    type={lesson.type}
                  />
                </Col>
              )
            );
        }
      })}
    </Row>
  );
}

export default Lessons;
