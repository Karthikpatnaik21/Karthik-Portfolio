import React from "react";
import Card from "react-bootstrap/Card";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaCogs } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am&nbsp;<span className="purple">Karthik Surendra Patnaik</span>&nbsp;
            from <span className="purple"> Vishakapatnam, India.</span>
            <br />
            I am currently employed as a Reactjs Developer at STEMWorld.
            <br />
            I have completed Bachelors Degree in Technology (B.Tech).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoLogoGameControllerB /> &nbsp; Playing Games
            </li>
            <li className="about-activity">
              <FaCogs /> &nbsp; Trying to do automation
            </li>
            <li className="about-activity">
              <FaBookReader /> &nbsp; Studying new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn and Adapt to new technologies!"{" "}
          </p>
          <footer className="blockquote-footer">Karthik Surendra Patnaik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
