import {combineReducers} from "redux";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";


import user from "./user/userReducer";

const rootReducers = combineReducers({
  	user,
});

const store = createStore(rootReducers, applyMiddleware(logger));
export default store;
