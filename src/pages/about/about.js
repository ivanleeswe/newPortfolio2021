import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/MyProfilePhoto.JPG";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="text-center" style={{color:"white"}}>ABOUT <span style={{color:"aqua"}}>ME</span></h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 rounded">
                Hi there! I am <strong style={{color:"yellow"}}>&nbsp;Ivan Lee</strong>
                <br />I can't believe that it took me so long to pursue my passion in software engineering. I eat, shower, and sleep thinking about code now and I can't stop! I am a freelancer and part of a software engineer team for a non-profit organization called ShelterTech. I am always either building an application, learning and refining my skills, or solving data structure and algorithm problems. Currently, I am looking for the next step of my career, which is to be a software engineer for an amazing company. Feel free to browse around my portfolio and if you like what you see, please shoot me a mesage and let's chat!

                <Col className="d-flex justify-content-center flex-wrap" style={{marginTop: "20px"}}>
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1I-pR0asIhhuEVON0mFSVJ7yAXxG3nveJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ivanleeswe" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ivanleeswe" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;