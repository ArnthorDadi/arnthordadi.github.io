import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiScriptcs,
    DiNetmagazine,
    DiStreamline,
    DiNodejs,
    DiPython,
    DiMongodb
} from "react-icons/di";
import { AiOutlineGlobal } from "react-icons/ai";

function BackendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiScriptcs />
        <p style={{ fontSize: "0.2em" }} >C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetmagazine />
        <p style={{ fontSize: "0.2em" }} >DOTNET</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiStreamline />
        <p style={{ fontSize: "0.2em" }} >SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.2em" }} >NODE JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineGlobal />
        <p style={{ fontSize: "0.2em" }} >REST API</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.2em" }} >Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "0.2em" }} >MONGO DB</p>
      </Col>
    </Row>
  );
}

export default BackendStack;
