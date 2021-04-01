import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience" style={{paddingTop:"60px"}}>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPER<span  style={{color:"yellow"}} >IENCE</span></h1>
      <Jumbotron className="jumbo-style" >
        <Container >
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <div>
                      <Card.Title className="text-center">ShelterTech</Card.Title>
                    </div>
                    <strong className="body-title-style ">Software Engineer</strong>
                    <br />
                      JavaScript, React, HTML, CSS, TypeScript, Clubhouse, Figma, Storybook
                    <br />
                      Oct 2020 - Present
                    <br/>
                    <br/>
                    <ul className="text-left">
                      <li>Implemented exact reproduction of <strong>Figma</strong> designs with precision down to each detail with <strong>SCSS</strong>, including modification of a carousel library.</li>
                      <li>Built and launched a responsive website with a magazine-style UI using <strong>HTML, CSS, React, and JavaScript</strong> for desktop and mobile users with different screen sizes.</li>
                      <li>Refactored existing React code to <strong>TypeScript</strong> for headless CMS to enable non-developers to modify content with data consistency.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <div>
                      <Card.Title className="text-center">Freelance</Card.Title>
                    </div>
                    <strong className="body-title-style ">Software Engineer</strong>
                    <br />
                      JavaScript, React, HTML, CSS, Restful API, Figma
                    <br />
                      July 2019 - Present
                    <br/>
                    <br/>
                    <ul className="text-left">
                      <li>Implemented <strong>RESTful API</strong> routes for successful transfer of data between the client and OpenWeatherMapAPI.</li>
                      <li>Architected a design system using <strong>Figma</strong> and encompassed several design patterns to solve many complex UI problems with intuitive navigation.</li>
                      <li>Implemented a responsive website with slick UI for restaurant customers using desktop and mobile using <strong>JavaScript, CSS,  HTML, React</strong>.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
        </Container>
        
      </Jumbotron>

      
    </div>
  );
};

export default Experience;