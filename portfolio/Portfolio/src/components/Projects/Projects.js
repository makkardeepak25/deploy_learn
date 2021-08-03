import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"straw.png"}
              isBlog={false}
              title="StrawberryNet"
              deploy="#"
              description="Strawberrynet Clone build with react.js, Material-UI, and other frameworks"
              link="https://github.com/makkardeepak25/strawberry_net_clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/77038690/127118899-376ff30b-9550-44f7-828f-f487dcbc729d.jpg"}
              isBlog={false}
              title="Monster India"
              deploy="#"
              description="Monster India, awebsite for job seekers and recruiters can post new jobs, cloned with React JS."
              link="https://github.com/makkardeepak25/Monster_clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"ubo.png"}
              isBlog={false}
              title="Uboric"
              deploy="https://kotakrishna.github.io/Uboric-clone/"
              description="Uboric,e-marketplace for home products build with Advanced Javascript and HTML/CSS3"
              link="https://github.com/makkardeepak25/Uboric-clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"airtable.png"}
              isBlog={false}
              title="Airtable"
              deploy="#"
              description="Airtable cloned with basic Javascript and HTML/CSS"
              link="https://github.com/makkardeepak25/project_airtable"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
