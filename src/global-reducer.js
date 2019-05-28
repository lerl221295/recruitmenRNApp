import { combineReducers } from 'redux';

import candidatesReducer from './containers/Candidates/reducer';

const createGlobalReducer = () => (
  combineReducers({
    candidates: candidatesReducer
  })
);

export default createGlobalReducer;
