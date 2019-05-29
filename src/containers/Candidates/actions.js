import {
  GET_CANDIDATES,
  SET_CANDIDATES,
  GET_TECHNOLOGIES,
  SET_TECHNOLOGIES,
  GET_API_DATA_ERROR,
  SET_SEARCH_VALUE,
  SET_MINIMUM_YEARS,
  SET_MAXIMUM_YEARS,
  REJECT_CANDIDATE,
  ACCEPT_CANDIDATE
} from './constants';

export const getCandidates = () => ({
  type: GET_CANDIDATES
});

export const setCandidates = (data) => ({
  type: SET_CANDIDATES,
  data
});

export const getTechnologies = () => ({
  type: GET_TECHNOLOGIES
});

export const setTechnologies = (data) => ({
  type: SET_TECHNOLOGIES,
  data
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  value
});


export const setMinimumYearsValue = (value) => ({
  type: SET_MINIMUM_YEARS,
  value
});

export const rejectCandidate = (id) => ({
  type: REJECT_CANDIDATE,
  id
});

export const acceptCandidate = (id) => ({
  type: ACCEPT_CANDIDATE,
  id
});