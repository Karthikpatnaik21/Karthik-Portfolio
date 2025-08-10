import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Karthik - Python developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="d-flex justify-content-center">
            <iframe
              src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=Fit`}
              width={width > 786 ? "60%" : "95%"}
              height={width > 786 ? "1170px" : "460px"}
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                background: "#fff",
                overflow: "hidden"
              }}
              title="Resume PDF"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;