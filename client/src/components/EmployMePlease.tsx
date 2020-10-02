import React from "react";
import { Col, Row } from "react-bootstrap";
import "./employMePlease.css";

function EmployMePlease() {
    return (
        <Row className="text-center resumeRow">
            <Col  md={3} />
            <Col xs={6} md={3} className="wordResume">
                <h3>
                    <a href="/files/resume.docx" rel="noopener noreferrer" target="_blank"><i className="fas fa-file-word"></i> Word</a>
                </h3>
            </Col>
            <Col xs={6}  md={3} className="Resume">
                <h3>
                    <a href="/files/resume.pdf" rel="noopener noreferrer" target="_blank"><i className="fas fa-file-pdf"></i> PDF</a>
                </h3>
            </Col>
            <Col md={3} />
        </Row>
    )
};

export default EmployMePlease;