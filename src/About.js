import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="my-5">
      <Row>
        <Col>
          <h2>About Me</h2>
          <p>Hello! </p>
          <p>
            I’m Gilberto Pacce, a seasoned Full Stack Developer based in Porto
            Alegre, Brazil, with over a decade of experience, primarily with
            Dell Technologies. I am passionate about crafting innovative
            solutions to real-world problems, specializing in designing,
            developing, and maintaining custom software solutions. My expertise
            encompasses JavaScript, Angular, React, .NET, C#, HTML/CSS, Docker,
            and Kubernetes, with a strong focus on seamless integrations with
            Adobe Campaign Classic. I am dedicated to delivering solutions that
            excel in security, scalability, and performance.
          </p>
          <p>
            I thrive in collaborative environments, working closely with
            developers, project managers, and stakeholders to define
            requirements and ensure timely, budget-conscious project delivery.
            My strong communication skills and effective time management enhance
            teamwork and continuous improvement. With certifications in Adobe,
            Cybersecurity Awareness, Virtual Reality, AI Fundamentals, and IoT,
            I am well-equipped to tackle diverse challenges and contribute to
            cutting-edge projects. Fluent in Portuguese and English, I am
            prepared to engage with a global audience and explore new
            opportunities in the dynamic tech landscape.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
