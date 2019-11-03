import { all, fork } from 'redux-saga/effects';
import { signInSaga } from './sagas/signInSaga';
import { registerSaga } from './sagas/registerSaga';

export function* mainSaga() {
  yield all([
    fork(signInSaga),
    fork(registerSaga)
  ])
}