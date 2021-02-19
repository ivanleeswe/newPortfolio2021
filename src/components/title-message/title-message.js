
import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="text-center">
          <strong style={{color:"white"}}>Ivan Lee's <span style={{color:"aqua"}}>Portfolio</span></strong>
          <br/>
          <strong style={{color:"white", fontSize: "20px"}}> Software Engineer <span style={{color:"aqua"}}> | </span> Web Developer <span style={{color:"aqua"}}> | </span> Programmer</strong>
          <div style={{marginTop: "100px", fontSize: "20px"}}>
            <Typewriter
              options={{
                strings: ["Welcome","Thank you for visiting"],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </div>
        </div>
        <div className="sub">
          
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;