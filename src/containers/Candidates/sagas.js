import { takeLatest, all, call, put } from 'redux-saga/effects';

import { setCandidates, setTechnologies, getAPIDataError } from './actions';

import {
  GET_CANDIDATES, GET_TECHNOLOGIES
} from './constants';

import BackendService from '../../services/BackendService';

function* getCandidates() {
  try {
    const { result, error } = yield call(BackendService.getCandidates);

    if (!result || error) {
      return yield put(getAPIDataError(error));
    }

    return yield put(setCandidates(result));

  } catch (error) {
    return yield put(getAPIDataError(error));
  }
}

function* getTechnologies() {
  try {
    const { result, error } = yield call(BackendService.getTechnologies);

    if (!result || error) {

      return yield put(getAPIDataError(error));
    }

    return yield put(setTechnologies(result));

  } catch (error) {

    return yield put(getAPIDataError(error));
  }
}

function* apiData() {
  yield takeLatest(GET_CANDIDATES, getCandidates);
  yield takeLatest(GET_TECHNOLOGIES, getTechnologies);
}

export default apiData;
