import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleLesson from "./SingleLesson";

function Lessons({ type, layout }) {
  const lessonState = useSelector((state) => state.lesson);
  const doneLessons = lessonState.doneLessons;
  const { currentFolder } = useSelector((state) => state.folder);
  const [sortedLessons, setSortedLessons] = useState([]);
  useEffect(() => {
    const lesson = [...lessonState.allLessons];
    lesson.sort(
      (a, b) => Number(a.title.split(" ")[1]) - Number(b.title.split(" ")[1])
    );
    setSortedLessons(
      lesson.filter((lesson) => lesson.folder === currentFolder.id)
    );
  }, [lessonState.allLessons]);
  return (
    <Row className="mx-2 mt-2">
      {sortedLessons.map((lesson) => {
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
    // <Row className="mx-2 mt-2">
    //   {sortedLessons.map(
    //     (lesson) =>
    //       lesson.folder === currentFolder.id && (
    //         <Col
    //           md={layout === 1 ? 3 : 12}
    //           sm={4}
    //           className="mt-3"
    //           key={lesson._id}
    //         >
    //           <SingleLesson
    //             title={lesson.title}
    //             id={lesson._id}
    //             type={lesson.type}
    //             key={lesson._id}
    //           />
    //         </Col>
    //       )
    //   )}
    // </Row>
  );
}

export default Lessons;
