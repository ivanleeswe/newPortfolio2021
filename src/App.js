import React from "react";
import MyNavbar from "./components/navbar/navbar";
import MainBlock from "./components/mainblock/mainblock";
import MyTitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/timeline/timeline";
import Experience from "./pages/experience/experience";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact/contact";
import { Parallax } from "react-parallax";

import "./App.css";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <MainBlock />
      <MyTitleMessage />
      <About />
      <Skills />
  
{/* 
      <div>
        <div
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </div>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr /> */}
    </div>
  );
};

export default App;