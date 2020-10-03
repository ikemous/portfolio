
export const updateFilter = (search: string): object => {
    return {
        type: "UPDATE_FILTER",
        payload: search
    };
};

export const updateProjects = (projects: object[]) : object => {
    return {
        type: "UPDATE_PROJECTS",
        payload: projects
    };
};

export const updatePagnation = (pagnationPostion: number): object => {
    return {
        type: "UPDATE_PAGNATION",
        payload: pagnationPostion
    }  
};

export const updateShow = (showThese: object[]): object => {
    return {
        type: "UPDATE_SHOW",
        payload: showThese
    }  
};
