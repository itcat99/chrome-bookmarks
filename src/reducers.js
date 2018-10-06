import { combineReducers } from "redux";
import reducers from "./reducers/index.js";
console.log("> reducers: ", reducers);
export default combineReducers(reducers);
