import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";
import FilterProjectsForm from "../components/FilterProjectsForm";

function ProjectPage() {
    const { filter } = useSelector((state:RootStateOrAny) => state.global);

    useEffect(() => {
        console.log(`Filter: ${filter}`);
    }, [filter]);

    return (
        <Container fluid>
            <FilterProjectsForm />
            <Row lg={4} className="justify-content-md-center">

            </Row>
        </Container>
    );
};

export default ProjectPage;