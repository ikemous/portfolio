import React from "react";
import { Col, Row } from "react-bootstrap";
import "./employMePlease.css";

function EmployMePlease() {
    return (
        <Row className="text-center resumeRow">
            <Col  xs={3} />
            <Col xs={3} className="wordResume">
                <h3>
                    <a><i className="fas fa-file-word"></i> Word</a>
                </h3>
            </Col>
            <Col xs={3} className="Resume">
                <h3>
                    <a><i className="fas fa-file-pdf"></i> PDF</a>
                </h3>
            </Col>
            <Col  xs={3} />
        </Row>
    )
};

export default EmployMePlease;