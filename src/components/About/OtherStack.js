import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiDocker,
    DiNpm,
    DiReact,
    DiVisualstudio
} from "react-icons/di";
import { AiFillCiCircle } from "react-icons/ai";
import {
    SiLinux,
    SiPostman,
    SiHeroku,
  } from "react-icons/si";

function OtherStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={{ fontSize: "0.2em" }} >DOCKER</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <p style={{ fontSize: "0.2em" }} >NPM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillCiCircle />
        <p style={{ fontSize: "0.2em" }} >CI/CD PIPELINE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.2em" }} >REACT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <p style={{ fontSize: "0.2em" }} >VISUAL STUDIO</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: "0.2em" }} >LINUX</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.2em" }} >POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{ fontSize: "0.2em" }} >HEROKU</p>
      </Col>
    </Row>
  );
}

export default OtherStack;
