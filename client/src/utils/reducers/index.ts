import { combineReducers } from "redux";
import { stateReducer } from "./stateReducer";

const allReducers = combineReducers({
    global: stateReducer
});

export default allReducers;