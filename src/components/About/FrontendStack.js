import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
} from "react-icons/di";
//import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function FrontendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: "0.2em" }} >HTML 5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "0.2em" }} >CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <p style={{ fontSize: "0.2em" }} >JAVASCRIPT</p>
      </Col>
    </Row>
  );
}

export default FrontendStack;
