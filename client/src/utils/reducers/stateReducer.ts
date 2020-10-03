interface State {
    filter: string;
    pagnationPosition: number;
    show: object[];
    projects: object[];
};

interface Action { 
    type: string,
    payload: string | object[] | number
};

export const stateReducer = (state: State = {filter: "", pagnationPosition: 1, show: [], projects: [],}, action: Action) => {
    switch(action.type) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        case "UPDATE_PROJECTS":
            return {...state, projects: action.payload};
        case "UPDATE_PAGNATION":
            return {...state, pagnationPosition: action.payload};
        case "UPDATE_SHOW":
            return {...state, show: action.payload};
        default:
            return state;
    };
};
