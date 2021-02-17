import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import formLoginReducer from "./formLoginReducer";


export default combineReducers({
    mainReducer,
    formLoginReducer
});