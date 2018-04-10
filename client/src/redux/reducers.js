import { combineReducers } from "redux";
import counter from "./reducers/counter";
import login from './reducers/login'
import red from './reducers/red';
import wxInfo from './reducers/createWxInfo'


export default combineReducers ({
    counter,
    login,
    red,
    wxInfo
})