import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";

function ProjectPage() {
    return (
        <Container fluid>
            <FilterProjectsForm />
            <Row lg={4} className="justify-content-md-center">

            </Row>
        </Container>
    );
};

export default ProjectPage;