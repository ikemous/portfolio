import React, { useEffect } from "react";
import DottedBackground from "../components/DottedBackground";
import MoveMeToTop from "../components/MoveMeToTop"
import RadProjectCard from "../components/RadProjectCard"
import Pagnation from "../components/Pagnation";
import { Project } from "../utils/types";
import { updateShow } from "../utils/actions";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";
import "./projectPage.css";

function ProjectPage() {
    const { projects, pagnationPosition, show, loading, noProjects } = useSelector((state: RootStateOrAny) => state.global);
    const dispatch = useDispatch();

    useEffect(() => {
        const screen = [];
        for(let i = (pagnationPosition - 1) * 8; i < projects.length && i < pagnationPosition * 8 ; i++)
        {
            screen.push(projects[i]);
        }
        dispatch(updateShow(screen));
    }, [projects, pagnationPosition]);
    
    return (
        <>
        <Container className="projectsContainer" fluid>
            <DottedBackground />
            <FilterProjectsForm />
            <Row className="justify-content-center projectsRow">
                {loading?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    :
                    noProjects?
                        <h1 className="text-center">Project Coming Soon</h1>
                    :
                    show.map((item:Project) => 
                        <Col 
                            className="projectColumn"
                            xs={12} md={6} lg={3} 
                            key={item._id}>
                            <RadProjectCard project={item}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
        <Container>
            <Row className="justify-content-center">
                <Pagnation length={projects.length} pagnationPosition={pagnationPosition} />
            </Row>
        </Container>
        <MoveMeToTop />
        </>
    );
};

export default ProjectPage;