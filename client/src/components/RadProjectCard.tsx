import React from "react";
import { Project } from "../utils/types"
import { Card, Button } from "react-bootstrap";
import "./radProjectCard.css"

interface Props{
    project: Project
}

function RadProjectCard({ project }: Props) {
    return (
        <Card className="projectCard secondaryBackground">
            <Card.Img className="projectImage" variant="top" src={project.imageRoute|| "https://via.placeholder.com/150"} />
            <Card.Body>
                <Card.Title className="text-center">{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.description}</Card.Subtitle>
                <Card.Text className="projectDescription">
                    {project.skills}
                </Card.Text>
                <Button 
                    className="leftButton"
                    as="a" 
                    href={project.githubURL} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    variant="primary"
                >
                    <i className="fas fa-code"></i>
                </Button>
                <Button
                    className="rightButton"
                    as="a" 
                    href={project.deployedURL!==""?project.deployedURL:"https://www.fg.gg/ikemous"} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    variant="primary"
                    disabled={project.deployedURL===""}
                >
                    <i className="fas fa-globe"></i>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default RadProjectCard;