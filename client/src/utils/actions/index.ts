export const updateFilter = (search: string): object => {
    return {
        type: "UPDATE_FILTER",
        payload: search
    }
};

export const updateProjects = (projects: object[]) : object => {
    return {
        type: "UPDATE_PROJECTS",
        payload: projects
    };
};
