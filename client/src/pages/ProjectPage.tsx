import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";

function ProjectPage() {
    return (
        <Container fluid>
            <FilterProjectsForm />
        </Container>
    );
};

export default ProjectPage;