import React from "react";
import Button from "react-bootstrap/Button";
import "./contact.styles.css";

const ContactForm = () => {
  return (
    <div id="contact" className="contactMe">
          <div className="d-flex justify-content-center flex-wrap" style={{marginTop: "20px"}}>
         
            <div className="m-2">
              <a href="mailto:ivanleeswe@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="ivanleeswe@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2" style={{color: "aqua"}}>
              <a href="https://www.linkedin.com/in/ivanleeswe/" target="_blank" rel="noopener noreferrer" >
                <Button variant="outline-primary" title="Visit my LinkenIn" style={{color: "#17a2b8", borderColor: "#17a2b8"}}>
                  <i className="fab fa-linkedin" ></i> LinkedIn
                </Button>
              </a>
            </div>       
            <div className="m-2">
              <a href="https://github.com/ivanleeswe" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </div>
    </div>
  );
};

export default ContactForm;