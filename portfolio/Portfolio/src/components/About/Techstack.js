import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 /><br />
        <p style={{fontSize:"20px"}}>Javascript</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"20px"}}>Node JS</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"20px"}}>React JS</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize:"20px"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"20px"}}>GIT</p>
      </Col>
    </Row>
  );
}

export default Techstack;
