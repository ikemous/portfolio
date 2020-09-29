import API from "../API"

export const updateFilter = (search: string): object => {
    return {
        type: "UPDATE_FILTER",
        payload: search
    };
};

export const updateProjects = (projects: object[]) : object => {
    API.getProjects().then(data => console.log(data))
        .catch(err => console.log(err))
    return {
        type: "UPDATE_PROJECTS",
        payload: projects
    };
};
