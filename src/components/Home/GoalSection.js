import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GoalSection = () => {
  return (
    <Container fluid className="home-goals-section py-5" id="goals">
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description ">
            <h1
              className="purple"
              style={{ fontSize: "2.6em", fontWeight: "bold" }}
            >
              Goals to Achieve
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1
              style={{
                width: "200px",
                fontSize: "1.2em",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              VISION
            </h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight">
                  Enhance the robustness and reliability of our automation
                  platforms to ensure uninterrupted operation for our clients.
                </li>
                <li className="animate__animated animate__fadeInRight delay-1s">
                  Establish proactive monitoring systems to promptly identify
                  and address potential stability issues before they impact
                  business operations.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1
              style={{
                width: "200px",
                fontSize: "1.2em",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              SECURITY
            </h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight delay-2s">
                  Implement stringent security measures to safeguard sensitive
                  data and protect against cyber threats.
                </li>
                <li className="animate__animated animate__fadeInRight delay-3s">
                  Regularly update and audit our systems to ensure compliance
                  with industry standards and regulations, providing peace of
                  mind to our clients.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <h1
              style={{
                width: "200px",
                fontSize: "1.2em",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              CONTINUITY
            </h1>
          </Col>
          <Col
            md={9}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start gap-5 align-items-center flex-column flex-md-row"
          >
            <div>
              <ul className="text-start">
                <li className="animate__animated animate__fadeInRight delay-4s">
                  Dispatching: We offer advanced dispatching solutions tailored
                  to meet the unique needs of our clients, enabling them to
                  optimize routes, manage fleets, and improve overall logistics
                  management.
                </li>
                <li className="animate__animated animate__fadeInRight delay-5s">
                  Offer scalable solutions that can seamlessly adapt to evolving
                  business needs and ensure uninterrupted service delivery.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default GoalSection;
