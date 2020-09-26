interface State {
    filter: string
};

interface Action { 
    type: string,
    payload: string 
}

export const stateReducer = (state: State = {filter: ""}, action: Action) => {
    switch(action.payload) {
        case "UPDATE_FILTER":
            return {...state, filter: action.payload};
        default:
            return state;
    };
};
