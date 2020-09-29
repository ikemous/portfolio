import React, { useEffect } from "react";
import API from "../utils/API";
import { Container, Row } from "react-bootstrap";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
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