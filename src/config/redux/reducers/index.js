import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import formLoginReducer from "./formLoginReducer";
import todoReducer from "./todoReducer"


export default combineReducers({
    mainReducer,
    formLoginReducer,
    todoReducer
});