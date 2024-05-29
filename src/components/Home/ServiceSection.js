import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "../Services/ServicesCard";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const ServiceSection = () => {
  return (
    <Container fluid className="home-goals-section py-5" id="goals">
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description">
            <h1 className="purple clamp1">Services </h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column"
          >
            <h1
              className="clamp3"
              style={{
                width: "250px",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              LOGISTICS SERVICES
            </h1>
            <div>
              <ul className=" clamp4 text-start d-flex flex-column gap-4">
                <li className="animate__animated animate__fadeInRight delay-4s">
                  Dispatching: We offer advanced dispatching solutions tailored
                  to meet the unique needs of our clients, enabling them to
                  optimize routes, manage fleets, and improve overall logistics
                  management.
                </li>
                <li className="animate__animated animate__fadeInRight delay-5s">
                  Electronic Logging Device (ELD): NNT Express has developed
                  cutting-edge ELD solutions to help organizations comply with
                  regulatory requirements, track driver hours accurately, and
                  enhance safety and compliance on the road.
                </li>
                <li className="animate__animated animate__fadeInRight delay-5s">
                  Other Side Work: Beyond dispatching and ELD, we offer a range
                  of supplementary services to support our clients' logistics
                  needs. From route planning and optimization to load tracking
                  and inventory management, we provide comprehensive solutions
                  to address every aspect of the logistics process.
                </li>
              </ul>
            </div>
          </Col>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column"
          >
            <h1
              className="clamp3"
              style={{
                width: "250px",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              IT SERVICES
            </h1>
            <div>
              <ul className="clamp4 text-start d-flex flex-column gap-4">
                <li className="animate__animated animate__fadeInRight delay-4s">
                  Complete Platforms: We specialize in designing and
                  implementing complete platforms tailored to the specific needs
                  of our clients. Whether it's a Customer Relationship
                  Management (SRM) platform to streamline sales and customer
                  interactions or a Transportation Management System (TMS) to
                  optimize logistics operations, we deliver solutions that drive
                  efficiency and productivity.
                </li>
                <li className="animate__animated animate__fadeInRight delay-5s">
                  Websites: NNT Express creates dynamic and user- friendly
                  websites that serve as powerful tools for organizations to
                  establish their online presence, engage with customers, and
                  drive business growth. From e-commerce platforms to corporate
                  websites, we design and develop websites that are visually
                  stunning, easy to navigate, and optimized for performance
                  across all devices.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description">
            <h1 className="purple clamp1" style={{ fontWeight: "bold" }}>
              Achievements{" "}
            </h1>
            <p className="clamp3">
              WE ARE PROUD OF OUR ACHIEVEMENTS TO THIS DAY
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column"
          >
            <h1
              className="clamp2"
              style={{
                padding: "10px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              100+
            </h1>
            <p className="clamp4 ">TOTAL PROJECTS</p>
          </Col>
          <Col
            md={4}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column"
          >
            <h1
              className="clamp2"
              style={{
                padding: "10px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              25+
            </h1>
            <p className="clamp4 ">LOYAL CLIENTS</p>
          </Col>
          <Col
            md={4}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column"
          >
            <h1
              className="clamp2"
              style={{
                padding: "10px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              95%
            </h1>
            <p className="clamp4 ">CLIENT SATISFACTION </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceSection;
