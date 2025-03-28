import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaFacebook,
  FaPhoneAlt,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { mainLogo } from "../img";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12}>
              <p className="clamp4">REACH US</p>
              <h1 className="clamp2">Anytime, Anywhere</h1>
            </Col>
            <Col lg={4} md={6} sm={12} className="home-about-social">
              <img src={mainLogo} className="footer-logo mt-2" alt="brand" />
            </Col>
            <Col lg={4} md={6} sm={12} className="home-about-social">
              <ul className="home-about-social-links d-flex  gap-3 flex-column">
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons d-flex flex-row justify-content-center align-items-center"
                    >
                      <TfiEmail size={20} />
                    </a>
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4 text-start">
                      xkamron2001@gmail.com
                    </h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons d-flex flex-row justify-content-center align-items-center"
                    >
                      <FaTelegramPlane size={20} />
                    </a>
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4 text-start">@tnodirt</h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons d-flex flex-row justify-content-center align-items-center"
                    >
                      <FaPhoneAlt size={20} />
                    </a>
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4 text-start font-family-san-serif">
                      +998 90 940 33 36
                    </h6>
                  </Col>
                </Row>
                <Row className="social-icons d-flex flex-row justify-content-center align-items-center">
                  <Col xs={2}>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons d-flex flex-row justify-content-center align-items-center"
                    >
                      <IoMdHome size={25} />
                    </a>
                  </Col>
                  <Col>
                    <h6 className="p-0 m-0 clamp4 text-start">
                      Kashkadarya region, Karshi city, I. Karimov st. 212
                      Building
                    </h6>
                  </Col>
                </Row>
              </ul>
            </Col>
            <Col
              md={4}
              className="home-about-social d-flex justify-content-center"
            >
              <Nav
                className="d-flex flex-column justify-content-center align-items-md-start align-items-sm-start"
                defaultActiveKey="#home"
              >
                <Nav.Item className="">
                  <Nav.Link className="purple" as={Link} to="/">
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="">
                  <Nav.Link className="purple" as={Link} to="/about">
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className=" position-relative nav-item">
                  <Nav.Link className="purple" as={Link} to="/">
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    />{" "}
                    Services
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="">
                  <Nav.Link className="purple" as={Link} to="/portfolio">
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Portfolio
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="">
                  <Nav.Link className="purple" as={Link} to="/contact">
                    <ImBlog style={{ marginBottom: "2px" }} /> Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="line-style"></div>
      <Row className="mt-4">
        <Col md={6} className="footer-copywright">
          <h3>Copyright © {year} NNT Express INC</h3>
        </Col>
        <Col md={6} className="footer-body">
          <ul className="footer-icons d-flex justify-content-center">
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
