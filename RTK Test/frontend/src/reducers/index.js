import { combineReducers } from "@reduxjs/toolkit";
import DataReducer from "../slice/DataSlice";

const rootReducer=combineReducers({
    data:DataReducer
})

export default rootReducer;