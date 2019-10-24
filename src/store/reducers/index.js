import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';

export const reducer = combineReducers({
  countries: countriesReducer
});
