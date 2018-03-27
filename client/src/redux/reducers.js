import { combineReducers } from "redux";
import counter from "./reducers/counter";
import login from './reducers/login'

export default combineReducers ({
    counter,
    login
})