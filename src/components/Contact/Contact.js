import React, { useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './Contact.css';
import Map from "./map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blw86sy', 'template_5bf9r4d', form.current, 'UWKokUDQPtSsV6HYa')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
      });

    e.target.reset();
  };

  return (
    <Container fluid className="about-section screen">
      <Container>
        <Row md={12}>
          <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
            Contact Us
          </h1>
        </Row>
        <Row>
          <Col md={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-start">
            <Form ref={form} onSubmit={sendEmail} className="form-control1 w-100 mb-5">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-start custom-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-start custom-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="text-start custom-label">Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label className="text-start custom-label">Message</Form.Label>
                <Form.Control
                  style={{ height: "135px" }}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Write your message"
                  className="custom-input"
                />
              </Form.Group>
              <Button type="submit" className="w-100 button-from">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} xs={{ order: 1 }} className="d-flex justify-content-start align-items-start">
            <Map />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
