import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";
import { languagesReducer } from "./languagesReducer";

export const reducer = combineReducers({
  countries: countriesReducer,
  languages: languagesReducer
});
