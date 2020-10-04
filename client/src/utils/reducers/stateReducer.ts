interface State {
    filter: string;
    pagnationPosition: number;
    show: object[];
    projects: object[];
    loading: boolean;
    noProjects: boolean;
};

interface Action { 
    type: string,
    payload: string | object[] | number | boolean
};

export const stateReducer = (state: State = {
        filter: "",
        pagnationPosition: 1, 
        show: [], 
        projects: [],
        loading: true,
        noProjects: true
    }, action: Action) => {
    switch(action.type) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        case "UPDATE_PROJECTS":
            return {...state, projects: action.payload};
        case "UPDATE_PAGNATION":
            return {...state, pagnationPosition: action.payload};
        case "UPDATE_SHOW":
            return {...state, show: action.payload};
        case "SET_LOADING":
            return {...state, loading: action.payload};
        case "SET_NO_PROJECTS":
            return {...state, noProjects: action.payload};
        default:
            return state;
    };
};
