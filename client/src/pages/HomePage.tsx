import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

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
                <Col xs={12} md={6} className="text-center">
                    <h2>About Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">
                    <h3>High Scool</h3>
                    Fill this with about me information
                    <h3>College</h3>
                    
                    <h3>Trilogy</h3>

                    
                    <h3>Continued Education</h3>
                </Col>
            </Row>
            <Row style={{background: "blue"}} id="current-employment">
                <Col xs={12} md={6} className="text-center">
                    <h2>Current Employment</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">  
                    <h3>Conduent</h3>
                    <h4>Title</h4>
                    <h4>Responsibilities</h4>
                </Col>
            </Row>
            <Row style={{background: "greenyellow"}} id="connect-with-me">
                <Col xs={12} md={6} className="text-center">
                    <h2>Connect With Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">
                    <h3>facebook</h3>
                    <h3>github</h3>
                    <h3>linkedin</h3>
                    <h3>Twitter</h3>
                </Col>
            </Row>
            <Row style={{background: "lightblue"}} id="contact-me">
                <Col xs={12} md={6} className="text-center">
                    <h2>Contact Me</h2>
                </Col>
                <Col xs={12} md={6} className="text-left">
                    Fill with information
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;