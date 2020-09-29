interface State {
    filter: string,
    projects: object[]
};

interface Action { 
    type: string,
    payload: string | object[]
}

export const stateReducer = (state: State = {filter: "", projects: []}, action: Action) => {
    switch(action.type) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        case "UPDATE_PROJECTS":
            return {...state, projects: action.payload};
        default:
            return state;
    };
};
