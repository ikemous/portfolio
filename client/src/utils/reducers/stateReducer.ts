interface State {
    filter: string,
    projects: object[]
};

interface Action { 
    type: string,
    payload: string 
}

export const stateReducer = (state: State = {filter: "", projects: []}, action: Action) => {
    switch(action.payload) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        default:
            return state;
    };
};
