import React, { useEffect } from "react";
import { Project } from "../utils/types";
import RadProjectCard from "../components/RadProjectCard"
import Pagnation from "../components/Pagnation";
import { updateShow } from "../utils/actions";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";
import "./projectPage.css"

function ProjectPage() {
    const { projects, pagnationPosition, show } = useSelector((state: RootStateOrAny) => state.global);
    const dispatch = useDispatch();

    useEffect(() => {
        const screen = [];
        for(let i = (pagnationPosition - 1) * 8; i < projects.length && i < pagnationPosition * 8 ; i++)
        {
            screen.push(projects[i]);
        }
        console.log(screen);
        dispatch(updateShow(screen));
        console.log(show);
    }, [projects, pagnationPosition]);
    
    return (
        <>
        <Container style={{minHeight: "calc(100vh - 112px)"}} fluid>
            <FilterProjectsForm />
            <Row className="justify-content-center projectsRow">
                {show?
                    show.map((item:Project) => 
                        <Col 
                            className="projectColumn"
                            xs={12} md={6} lg={3} 
                            key={item._id}>
                            <RadProjectCard project={item}/>
                        </Col>
                    )
                    :
                        <></>
                }
            </Row>
        </Container>
        <Container>
            <Row className="justify-content-center">
                <Pagnation length={projects.length} pagnationPosition={pagnationPosition} />
            </Row>
        </Container>
        </>
    );
};

export default ProjectPage;