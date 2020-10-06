import React from "react";
import { Container } from "react-bootstrap";
import "./dottedBackground.css";

function DottedBackground() {
    return (
        <Container className="dottedContainer" fluid>
            <span className="dot dotOne" />
            <span className="dot dotTwo" />
            <span className="dot dotThree" />
            <span className="dot dotFour" />
            <span className="dot dotFive" />
            <span className="dot dotSix" />
            <span className="dot dotSeven" />
            <span className="dot dotEight" />
            <span className="dot dotNine" />
        </Container>
    )
};

export default DottedBackground;