import React from "react";

interface ProjectInformation {
    createdDate?: Date,
    updatedDate?: Date,
    title: string,
    description: string,
    skills: string,
    imageRoute: string,
    githubURL: string,
    deployedURL: string
}

function RadProjectCard<ProjectInformation>() {
    return (
        <>
        </>
    );
};

export default RadProjectCard;