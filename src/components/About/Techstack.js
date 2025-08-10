import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiReact, DiJavascript1, DiGit } from "react-icons/di";
import { SiHtml5, SiCss3, SiTensorflow, SiBootstrap, SiTailwindcss, SiNumpy, SiMongodb } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icon-name">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icon-name">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="tech-icon-name">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="tech-icon-name">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icon-name">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-icon-name">Tensorflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="tech-icon-name">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <div className="tech-icon-name">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="tech-icon-name">Tailwind</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icon-name">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icon-name">Numpy</div>
      </Col>
    </Row>
  );
}

export default Techstack;
