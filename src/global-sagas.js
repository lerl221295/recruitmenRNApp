import { fork, all } from 'redux-saga/effects';

import CandidatesSagas from './containers/Candidates/sagas';

const sagas = [
  CandidatesSagas
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
