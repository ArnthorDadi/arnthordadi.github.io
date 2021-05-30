import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Quotes from './Quotes';
import Github from "./Github";
//import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import FrontendStack from "./FrontendStack";
import BackendStack from "./BackendStack";
import OtherStack from "./OtherStack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Quotes />
        <br />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <h3 className="float-left">Front<strong className="purple">end</strong></h3>
        <br /><br />
        <FrontendStack />

        <h3 className="float-left">Back<strong className="purple">end</strong></h3>
        <br /><br />
        <BackendStack />
        
        <h3 className="float-left">Oth<strong className="purple">er</strong></h3>
        <br /><br />
        <OtherStack />

        <br />


        <Github />
      </Container>
    </Container>
  );
}
//<Techstack />

export default About;
