import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      <Row>
        <Col md={6} className="contact-form">
          <h2>Contact Me</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info">
          <h2>Contact Information</h2>
          <p>Phone: +55 51 992-500-723</p>
          <p>Email: gibapacce@gmail.com</p>
          <p>Address: Porto Alegre, Rio Grande do Sul, Brazil</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
