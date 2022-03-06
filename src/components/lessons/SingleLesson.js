import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ActionButtons from "./ActionButtons";

function SingleLesson({ title, id, type }) {
  const doneLessons = useSelector((state) => state.lesson.doneLessons);
  return (
    <Card
      border={doneLessons.includes(id) ? "success" : "warning"}
      className="shadow"
    >
      <Card.Body>
        <Card.Title className="d-flex mb-3">
          {title}
          <Badge
            className="ms-auto"
            bg={type === "READING" ? "success" : "danger"}
          >
            {type}
          </Badge>
        </Card.Title>
        <ActionButtons id={id} />
      </Card.Body>
    </Card>
  );
}

export default SingleLesson;
