import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="home-page-section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KARTHIK SURENDRA PATNAIK</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <Row className="home-about-links">
                <Col md={12} className="home-about-social">
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/Karthikpatnaik21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/karthikpatnaik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="mailto:someone@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <MdEmail />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="tel:+917093852332"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <MdCall />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </div>
  );
}

export default Home;
