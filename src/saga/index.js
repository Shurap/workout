import {all, fork} from 'redux-saga/effects';
import { signInSaga } from './sagas/signInSaga';

export function* mainSaga() {
  yield all([
    fork(signInSaga),
  ])
}