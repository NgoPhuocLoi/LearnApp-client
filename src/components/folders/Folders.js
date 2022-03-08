import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleFolder from "./SingleFolder/SingleFolder";

const Folders = () => {
  const folders = useSelector((state) => state.folder.allFolders);
  return (
    <Row className="mx-2 mt-2">
      {folders?.map((folder, index) => (
        <Col md="3" sm="4" key={folder._id} className="mt-3">
          <SingleFolder title={folder.title} index={index} id={folder._id} />
        </Col>
      ))}
    </Row>
  );
};

export default Folders;
