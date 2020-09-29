import React from "react";
import RadProjectCard from "../components/RadProjectCard"
import API from "../utils/API";
import { Project } from "../utils/types"
import { RootStateOrAny, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";

function ProjectPage() {
    const { projects } = useSelector((state: RootStateOrAny) => state.global)
    return (
        <Container fluid>
            <FilterProjectsForm />
            <Row className="justify-content-md-center">
                {projects?projects.map((item:Project) => 
                    <Col xs={12} md={6} lg={3} key={item._id}>
                        <RadProjectCard project={item}/>
                    </Col>)
                        :
                    <></>
                }
            </Row>
        </Container>
    );
};

export default ProjectPage;