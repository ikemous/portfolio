import React, { useEffect } from "react";
import RadProjectCard from "../components/RadProjectCard"
import Pagnation from "../components/Pagnation";
import API from "../utils/API";
import { RootStateOrAny, useSelector } from "react-redux";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import FilterProjectsForm from "../components/FilterProjectsForm";
import "./projectPage.css"

function ProjectPage() {
    const { projects, pagnationPosition } = useSelector((state: RootStateOrAny) => state.global)

    const renderProjects = ():any[] => {
        const start = (pagnationPosition - 1) * 8;
        const show:any[] = [];
        let count: number = 0;
        for(let i = start; i < 8 && start < projects.length; i++)
        {
            if(count > 8) {
                break;
            }
            show.push(
                <Col
                    className="projectColumn"
                    xs={12} md={6} lg={3} 
                    key={projects[i]._id}
                >
                    <RadProjectCard project={projects[i]} />
                </Col>
            )
        }
        return show;
    };

    return (
        <Container fluid>
            <FilterProjectsForm />
            <Row className="justify-content-md-center projectsRow">
                {projects?renderProjects():<></>}
                {/* {projects?projects.map((item:Project) => 
                    <Col 
                        className="projectColumn"
                        xs={12} md={6} lg={3} 
                        key={item._id}>
                        <RadProjectCard project={item}/>
                    </Col>)
                        :
                    <></>
                } */}
            </Row>
            <Row className="justify-content-md-center">
                <Pagnation length={projects.length} pagnationPosition={pagnationPosition} />
            </Row>
        </Container>
    );
};

export default ProjectPage;