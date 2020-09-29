import React from "react";
import { Project } from "../utils/types"
import { Card, Button } from "react-bootstrap";

interface Props{
    project: Project
}

function RadProjectCard({ project }: Props) {
    console.log(project);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.description}</Card.Subtitle>
                <Card.Text>
                    {project.skills}
                </Card.Text>
                <Button 
                    as="a" 
                    href={project.githubURL} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    variant="primary"
                >
                    Code
                </Button>
                <Button
                    as="a" 
                    href={project.deployedURL} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    variant="primary"
                >
                    Working Site
                </Button>
            </Card.Body>
        </Card>
    );
};

export default RadProjectCard;