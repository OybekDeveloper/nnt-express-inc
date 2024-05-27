import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ValuesSection() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} xs={{ order: 1 }} className="home-about-description">
            <h1
              className="purple"
              style={{ fontSize: "2.6em", fontWeight: "bold" }}
            >
              Values We Hold
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start align-items-center flex-column"
          >
            <h1
              style={{
                width: "200px",
                fontSize: "1.2em",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
              }}
            >
              VISION
            </h1>
            <p className="home-about-body">
              To be the premier leader in IT automation, empowering businesses
              worldwide to thrive in a digital future
            </p>
          </Col>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="home-about-description d-flex justify-content-start align-items-center flex-column"
          >
            <h1
              style={{
                width: "200px",
                fontSize: "1.2em",
                padding: "10px 20px",
                background: "#be50f4",
                borderRadius: "10px",
              }}
            >
              MISSION
            </h1>
            <p className="home-about-body">
              {" "}
              At NNT Express, our mission is to simplify complexity and drive
              efficiency through innovative IT automation solutions. We are
              dedicated to partnering with businesses to streamline processes,
              enhance productivity, and unlock new opportunities for growth.
              With a focus on excellence and customer satisfaction, we strive to
              be the trusted ally on every organization's journey towards
              digital transformation
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default ValuesSection;
