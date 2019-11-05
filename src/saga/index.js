import { all, fork } from 'redux-saga/effects';
import { signInSaga } from './sagas/signInSaga';
import { registerSaga } from './sagas/registerSaga';
import { signOutSaga } from './sagas/signOutSaga';

export function* mainSaga() {
  yield all([
    fork(signInSaga),
    fork(registerSaga),
    fork(signOutSaga)
  ])
}