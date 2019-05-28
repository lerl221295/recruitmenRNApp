import { fromJS } from 'immutable';

import {
  GET_CANDIDATES,
  SET_CANDIDATES,
  GET_TECHNOLOGIES,
  SET_TECHNOLOGIES,
  GET_API_DATA_ERROR,
  SET_SEARCH_VALUE,
  SET_MINIMUM_YEARS
} from './constants';

const initialState = fromJS({
  byId: {},
  filteredIds: [],
  loadingCandidates: true,
  loadedCandidates: false,
  technologies: {},
  loadingTechnologies: true,
  loadedTechnologies: false,
  apiDataError: false,
  searchText: '',
  minimumYears: 0
});

const candidatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return state
        .set('loadingCandidates', true);

    case SET_CANDIDATES:
      const candidates = action.data.reduce((map, candidate) => {
        map[candidate._id] = candidate;
        return map;
      }, {})
      return state
        .set('byId', candidates)
        .set('loadingCandidates', false)
        .set('loadedCandidates', true)
        .set('apiDataError', null);

    case GET_TECHNOLOGIES:
      return state
        .set('loadingTechnologies', true);

    case SET_TECHNOLOGIES:
      const technologies = action.data.reduce((map, tech) => {
        map[tech.name] = tech;
        return map;
      }, {})
      return state
        .set('technologies', technologies)
        .set('loadingTechnologies', false)
        .set('loadedTechnologies', true)
        .set('apiDataError', null);

    case GET_API_DATA_ERROR:
      return state
        .set('apiDataError', action.error);

    case SET_SEARCH_VALUE:
      return state
        .set('searchText', action.value);

    case SET_MINIMUM_YEARS:
      return state
        .set('minimumYears', Math.ceil(action.value));

    default:
      return state;
  }
};

export default candidatesReducer;
