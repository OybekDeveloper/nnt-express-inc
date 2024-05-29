import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { home1, logo1 } from "../../img";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="clamp1">
              WELCOME TO <span className="purple"> NNT EXPRESS</span>
            </h1>
            <p className="clamp4 home-about-body px-4">
              A leading IT company specializing in automation solutions. We're
              dedicated to simplifying and optimizing workflows through our
              advanced software platforms. With a focus on practicality and
              efficiency, we help businesses across various industries
              streamline their operations, saving time and resources
              <br />
              <br />
              At NNT Express, our goal is simple: to empower organizations with
              the tools they need to thrive in today's digital landscape.
              Through our proven expertise and commitment to innovation, we've
              successfully modernized countless businesses, delivering tangible
              results and measurable improvements.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={home1} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
