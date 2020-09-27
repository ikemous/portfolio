import React from "react";
import { Link } from "react-router-dom"
import { Col, Container, Image, Row } from "react-bootstrap";

function HomePage() {
    return(
        <Container>
            <Row style={{background:"green"}}>
                <Image 
                    style={{margin: "auto"}}
                    src="https://via.placeholder.com/150"
                    roundedCircle
                />
            </Row>
            <Row style={{background: "red"}}>
                <Col>
                    <Link to="#about-me">About Me</Link>
                </Col>
                <Col>
                    <a href="#current-employment">Employment</a>
                </Col>
                <Col>
                    <a href="#connect-with-me">Connect</a>
                </Col>
                <Col>
                    <a href="#contact-me">Contact</a>
                </Col>
            </Row>
            <Row id="about-me">

            </Row>
        </Container>
    );
};

export default HomePage;