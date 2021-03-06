import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arnthor Dadi </span>
            from <span className="purple">Reykjavík, Iceland.</span>
            <br />I am a junior software developer with bsc computer science degree from Reykjavík University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Training Gymnastics
            </li>
          </ul>
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
