import React from "react";
import EmployMePlease from "../components/EmployMePlease";
import FollowTheseBro from "../components/FollowTheseBro";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./homePage.css";

function HomePage() {
    return(
        <Container fluid>
            <h1 className="text-center">Ike Barranco</h1>
            <Row style={{background:"green"}}>
                <Image 
                    style={{margin: "auto"}}
                    src="https://via.placeholder.com/350"
                    roundedCircle
                />
            </Row>
            <h2 className="text-center">Resume</h2>
            <EmployMePlease />
            <Row className="text-center" style={{background: "red"}}>
                <Col>
                    <a href="#about-me">
                        <h3>About</h3>
                    </a>
                </Col>
                <Col>
                    <a href="#current-employment">
                        <h3>Employment</h3>
                    </a>
                </Col>
                <Col>
                    <a href="#connect-with-me">
                        <h3>Connect</h3>
                    </a>
                </Col>
                <Col>
                    <a href="#contact-me">
                        <h3>Contact</h3>
                    </a>
                </Col>
            </Row>
            <Row 
                className="section"
                style={{background: "yellow"}} 
                id="about-me"
            >
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center text-center">
                    <h2>About Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">
                    <h3>High Scool</h3>
                    <p>
                        I started programming in high school learning C# using Microsoft's
                        Visual Studio. We also learned some Java eclipse
                    </p>
                    <h3>College</h3>
                    <p>
                        Moving To College I started Learning Various languages for classes.
                        Two of the main languages were HTML and CSS. However I did some object
                        oriented programming with C# and C++ as well.
                    </p>
                    <h3>Trilogy</h3>
                    <p>
                        Half ways through completing my Bachelor's I felt like there wasn't 
                        enough material. After some research I found Triology's Coding Bootcamp
                        hosted by the University Of Utah. Throughout the course we learned React,
                        Html, CSS, Jquery, Javascript, MySQL, MongoDB, Markdown, Bootstrap and 
                        Node.
                    </p>
                    <h3>Continued Education</h3>
                    <p>
                        After Finishing Trilogy's Coding Bootcamp, I started learning items to
                        extend what i've learned from the course. Some of these technologies 
                        include Typescript, React-Redux, and Amazon Web Services(AWS)
                    </p>
                </Col>
            </Row>
            <Row 
                className="section"
                style={{background: "blue"}} 
                id="current-employment"
            >
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center text-center">
                    <h2>Current Employment</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">  
                    <h3>Conduent</h3>
                    <h4>NOC Monitoring Specialist </h4>
                    <h4>Responsibilities</h4>
                    <ul>
                        <li> Verify issues are occurring using SolarWinds, NetCool and LiveNX</li>
                        <li>
                            Use networking devices to troubleshoot and find more information on
                            downed items
                        </li>
                        <li>Use ServiceNow to create/track issues</li>
                        <li>
                            Communicate with various Internet Service Providers for connection
                            verification            
                        </li>
                        <li>Create tickets using Internet Service Provider ticketing systems</li>
                        <li>Actively communicate with multiple IT deparments</li>
                        <li>Conduent CNOC SharePoint Committee member</li>
                    </ul>
                </Col>
            </Row>
            <Row 
                className="section"
                style={{background: "greenyellow"}} 
                id="connect-with-me"
            >
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center text-center">
                    <h2>Connect With Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <FollowTheseBro />
                </Col>
            </Row>
            <Row 
                className="section"
                style={{background: "lightblue"}} 
                id="contact-me"
            >
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center text-center">
                    <h2>Contact Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">
                    <h3>
                        Email: 
                        <a href="mailto: barranco.ike@gmail.com?subject=Coding">
                            Click Here
                        </a>
                    </h3>
                    <h3>Cell: 385-229-7480</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;