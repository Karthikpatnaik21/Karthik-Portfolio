import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import images
import dino from "../../Assets/Projects/dinoAi.png";
import emotion from "../../Assets/Projects/emotion.png";
import volumeControl from "../../Assets/Projects/volumeControl.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import suicide from "../../Assets/Projects/suicide.png";
import AStar from "../../Assets/Projects/AStar.png";

// Array of projects
const projectsData = [
  {
    imgPath: weatherApp,
    isBlog: false,
    title: "Weather App",
    description:
      "A responsive weather forecasting application built with React.js and the OpenWeatherMap API. Delivers real-time weather updates, 5-day forecasts, and includes intelligent location spelling correction for Indian cities and popular states.",
    ghLink: "https://github.com/Karthikpatnaik21/Weather-App",
    demoLink: "https://karthikpatnaik21.github.io/Weather-App/",
  },
  {
    imgPath: AStar,
    isBlog: false,
    title: "A* Pathfinding Visualizer",
    description:
      "A Python and Pygame-based maze generator with an A* (A-star) pathfinding algorithm. Demonstrates real-time shortest-path calculations and algorithm visualization for interactive learning.",
    ghLink: "https://github.com/Karthikpatnaik21/A-star-Path-finder",
  },
  {
    imgPath: volumeControl,
    isBlog: false,
    title: "Gesture-Based Volume Control",
    description:
      "A Python application using OpenCV and MediaPipe to control system volume through hand gestures. Detects the distance between thumb and index fingertips for intuitive, touch-free volume adjustment.",
    ghLink: "https://github.com/Karthikpatnaik21/Hand-Volume-Control",
  },
  {
    imgPath: dino,
    isBlog: false,
    title: "Neuroevolution Dino AI",
    description:
      "One of my first AI projects, built while learning the fundamentals of neuroevolution and game AI. Trains an agent to autonomously play the Chrome Dino game using a fitness-based evolutionary algorithm.",
    ghLink: "https://github.com/Karthikpatnaik21/Dinosar-Neural-Network"
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
