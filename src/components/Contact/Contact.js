import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import './Contact.css';  // Make sure to import the custom CSS file
import Map from "./map";

const Contact = () => {
  return (
    <Container fluid className="about-section screen">
      {/* <Particle /> */}
      <Container>
        <Row md={12}>
        <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
             Contact Us
            </h1>
        </Row>
        <Row>
          <Col md={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-start">
            <Form className="form-control1 w-100 mb-5">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-start custom-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-start custom-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label className="text-start custom-label">Message</Form.Label>
                <Form.Control
                style={{height:"135px"}}
                  as="textarea"
                  rows={3}
                  placeholder="Write your message"
                  className="custom-input"
                />
              </Form.Group>
              <Button className="w-100 button-from">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-start">
            <Map/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
