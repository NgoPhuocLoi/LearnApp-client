import React from "react";
import { Card } from "react-bootstrap";
import ActionButtons from "./ActionButtons";

function SingleLesson({ title, id }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ActionButtons id={id} />
      </Card.Body>
    </Card>
  );
}

export default SingleLesson;
