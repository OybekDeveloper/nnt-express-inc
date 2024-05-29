import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { logisticimg } from "../../img"; // `logisticimg` o'zgaruvchisini import qo'shing

function Logistic() {
  return (
    <Container fluid className="project-section screen">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Logistics Services </strong>
        </h1>
        <Row>
          <Col
            md={7}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp2">Logistica Dispatcher for Trucks</p>
            <p className="clamp4">
              Welcome to Logistica Dispatcher for Trucks, your trusted partner in efficient and reliable truck dispatching services. Our mission is to streamline your logistics operations, ensuring timely deliveries and maximizing your fleet’s productivity.
            </p>
            <p className="clamp4">
              <strong>Our Services</strong>
              <ul>
                <li>
                  <strong>Real-Time Tracking and Route Optimization</strong><br />
                  - Monitor your fleet in real-time with our advanced GPS tracking system.<br />
                  - Optimize routes for fuel efficiency and on-time deliveries.
                </li>
                <li>
                  <strong>24/7 Dispatch Support</strong><br />
                  - Our experienced dispatchers are available around the clock to assist with any issues.<br />
                  - Dedicated support to ensure your trucks are always on the move.
                </li>
                <li>
                  <strong>Load Planning and Scheduling</strong><br />
                  - Efficient load planning to maximize cargo capacity and reduce empty miles.<br />
                  - Smart scheduling to ensure timely pickups and deliveries.
                </li>
                <li>
                  <strong>Compliance and Documentation Management</strong><br />
                  - Stay compliant with all industry regulations and requirements.<br />
                  - We handle all necessary documentation and reporting.
                </li>
                <li>
                  <strong>Advanced Analytics and Reporting</strong><br />
                  - Gain insights into your fleet’s performance with our detailed analytics.<br />
                  - Make data-driven decisions to improve your operations.
                </li>
              </ul>
            </p>
          </Col>
          <Col
            md={5}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            className="about-img"
          >
            <img style={{ borderRadius: '12px', }} src={logisticimg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={12}
            style={{
              textAlign: "start",
              justifyContent: "start",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="clamp4">
              <strong>Why Choose Us?</strong>
              <ul>
                <li>Experienced Team: Our team of professionals has years of experience in the logistics and transportation industry.</li>
                <li>Cutting-Edge Technology: We use the latest technology to provide top-notch dispatching services.</li>
                <li>Customer-Centric Approach: Your satisfaction is our priority. We tailor our services to meet your unique needs.</li>
                <li>Cost-Effective Solutions: Optimize your operations and reduce costs with our efficient dispatching services.</li>
              </ul>
            </p>
            <p className="clamp4">
              <strong>Get Started Today!</strong>
              <br />
              Ready to take your logistics operations to the next level? Contact us today to learn more about our services and how we can help you achieve your goals.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Logistic;
