import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPycharm,
  SiWindows,
  SiGithub,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <div className="tech-icon-name">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icon-name">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <div className="tech-icon-name">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
        <div className="tech-icon-name">Bash</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icon-name">GitHub</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
