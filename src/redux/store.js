import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchedImagesReducer from "./reducers";

const rootReducer = combineReducers({
  searchedImagesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
