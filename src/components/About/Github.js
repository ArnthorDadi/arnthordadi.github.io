import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from 'react-tooltip';
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Github</strong> Activity
      </h1>
      <GitHubCalendar
        username="ArnthorDadi"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={colourTheme}
        fullYear={true} >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
    </Row>
  );
}

export default Github;
