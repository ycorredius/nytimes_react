import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import bookReducer from "./nytimes/bookReducer";

export const rootReducer = combineReducers({
    authReducer,
    bookReducer
})