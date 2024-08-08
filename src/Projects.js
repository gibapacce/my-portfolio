import React from 'react';
import logo from './assets/Twitter-Clone-logo.png';
import {
  Container,
  Row,
  Col,
  Card,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import './App.css';

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  View the GitHub repository for the Twitter Clone project.
                </Tooltip>
              }
            >
              <a
                href="https://github.com/gibapacce/twitter-clone"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Card.Img variant="top" src={logo} />
              </a>
            </OverlayTrigger>
            <Card.Body className="custom-card-body">
              <Card.Title>Angular | NodeJS | Bootstrap</Card.Title>
              <Card.Text>
                Description of the project. Highlight the technologies used and
                what it accomplishes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body className="custom-card-body">
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Description of the project. Highlight the technologies used and
                what it accomplishes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body className="custom-card-body">
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Description of the project. Highlight the technologies used and
                what it accomplishes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
