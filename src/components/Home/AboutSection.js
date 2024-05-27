import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { home2 } from "../../img";

function AboutSection() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} xs={{ order: 2 }} className="myAvtar">
              <img src={home2} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} xs={{ order: 1 }} className="home-about-description">
            <h1
              style={{ fontSize: "2.6em", fontWeight: "bold" }}
            >
              A BRIEF HISTORY OF<span className="purple"> Our Journey</span>
            </h1>
            <p className="home-about-body px-4">
              NNT Express embodies a tale of innovation and adaptability, rooted
              in a commitment to excellence and driven by a passion for
              transformation. Established in 2020 within the logistics sector,
              NNT Express swiftly rose to prominence as a trusted partner,
              revolutionizing traditional workflows and setting new standards
              for efficiency and reliability.
              <br />
              <br />
              In 2023, recognizing the seismic shift towards digitalization, NNT
              Express embraced change and expanded its horizons into the realm
              of Information Technology (IT). This strategic pivot marked a
              defining moment in the company's evolution, as it embarked on a
              journey to harness the power of technology to shape the future of
              logistics.
              <br />
              <br />
              Under the visionary leadership of its founders, NNT Express
              swiftly became a trailblazer in the IT landscape, pioneering the
              development of essential platforms such as Electronic Logging
              Device (ELD) and Transportation Management System (TMS). These
              platforms not only streamlined logistics processes but also laid
              the foundation for a new era of innovation within the industry.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutSection;
