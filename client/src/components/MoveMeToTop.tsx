import React from "react";
import { Button } from "react-bootstrap";
import "./moveMeToTop.css";

function MoveMeToTop() {
    return (
        <Button href="#top" className="static-arrow" variant="light">
            <i className="fas fa-arrow-up" />
        </Button>
    );
};

export default MoveMeToTop;