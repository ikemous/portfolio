import React from "react";
import { Link } from "react-router-dom"
import { Col, Container, Image, Row } from "react-bootstrap";

function HomePage() {
    return(
        <Container>
            <Row style={{background:"green"}}>
                <Image 
                    style={{margin: "auto"}}
                    src="https://via.placeholder.com/350"
                    roundedCircle
                />
            </Row>
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
            <Row style={{background: "yellow"}} id="about-me">
                <Col className="text-center">
                    <h2>About Me</h2>
                </Col>
                <Col  className="text-left">
                    <h3>High Scool</h3>
                    Fill this with about me information
                    <h3>College</h3>
                    
                    <h3>Trilogy</h3>

                    
                    <h3>Continued Education</h3>
                </Col>
            </Row>
            <Row style={{background: "blue"}} id="current-employment">
                <Col className="text-right">  
                    <h3>Conduent</h3>
                    <h4>Title</h4>
                    <h4>Responsibilities</h4>
                </Col>
                <Col className="text-center">
                    <h2>Current Employment</h2>
                </Col>
            </Row>
            <Row style={{background: "greenyellow"}} id="connect-with-me">
                <Col className="text-center">
                    <h2>Connect With Me</h2>
                </Col>
                <Col className="text-left">
                    <h3>facebook</h3>
                    <h3>github</h3>
                    <h3>linkedin</h3>
                    <h3>Twitter</h3>
                </Col>
            </Row>
            <Row style={{background: "lightblue"}} id="contact-me">
                <Col className="text-right">
                    Fill with information
                </Col>
                <Col className="text-center">
                    <h2>Contact Me</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;