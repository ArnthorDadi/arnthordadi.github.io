import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import MazeSolver from "../../Assets/Projects/MazeSolver.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";

function createProject(title, imgPath, description, link, demo){
  return {
    "title": title,
    "imgPath": imgPath,
    "description": description,
    "githubLink": link,
    "demo": demo
  }
}

const PROJECTS = [
  createProject("MazeSolver", MazeSolver, 
    "Generate/create Mazes and see how algorithms solves them visually!", 
    "https://github.com/ArnthorDadi/MazeSolver",
    "https://arnthordadi.github.io/MazeSolver/"),

    createProject("Portfolio Site", Portfolio, 
    "This portfolio site!", 
    "https://github.com/ArnthorDadi/arnthordadi.github.io",
    "https://arnthordadi.github.io/")
]

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {PROJECTS.map((project, projectIndex) => {
            return (
              <Col md={6} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  demo={project.demo}
                  />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
