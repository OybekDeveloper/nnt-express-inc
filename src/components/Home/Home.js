import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AboutSection from "./AboutSection";
import ValuesSection from "./ValuesSection";
import { FaFacebook, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import GoalSection from "./GoalSection";
import { HomeMain } from "../../img";
import ServiceSection from "./ServiceSection";
import './home.css'
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <h1 style={{ paddingBottom: 15}} className="heading">
               YOU HAVE A TASK , WE HAVE THE SOLUTION
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={HomeMain}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <AboutSection />
      <ValuesSection />
      <GoalSection />
      <ServiceSection />
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>We are needed from here</h1>
              <p>
                Feel free to <span className="purple">connect </span> with we
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
