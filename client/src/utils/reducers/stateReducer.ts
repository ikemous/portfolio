interface State {
    filter: string;
    projects: object[];
    pagnationPosition: number;
};

interface Action { 
    type: string,
    payload: string | object[] | number
};

export const stateReducer = (state: State = {filter: "", projects: [], pagnationPosition: 1}, action: Action) => {
    switch(action.type) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        case "UPDATE_PROJECTS":
            return {...state, projects: action.payload};
        case "UPDATE_PAGNATION":
            return {...state, pagnationPosition: action.payload}
        default:
            return state;
    };
};
