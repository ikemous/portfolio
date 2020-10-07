import React from "react";
import { ListGroup } from "react-bootstrap";
import "./followTheseBro.css";

function FollowTheseBro() {
    return (
        <ListGroup horizontal="lg">
            <ListGroup.Item className="socialItem">
                <a href="https://www.fb.gg/ikemous" rel="noopener noreferrer" target="_blank">
                    <h3> <i className="fab fa-facebook" /> Facebook</h3>
                </a>
            </ListGroup.Item>
            <ListGroup.Item className="socialItem">
                <a href="https://github.com/ikemous" rel="noopener noreferrer" target="_blank">
                    <h3><i className="fab fa-github" /> Github</h3>
                </a>
            </ListGroup.Item>
            <ListGroup.Item className="socialItem">
                <a href="https://www.linkedin.com/in/ike-barranco/" rel="noopener noreferrer" target="_blank">
                    <h3><i className="fab fa-linkedin" /> LinkedIn</h3>
                </a>
            </ListGroup.Item>
        </ListGroup>
    );
};  

export default FollowTheseBro;