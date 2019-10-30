import {all, fork} from 'redux-saga/effects';
import { mainSaga } from './mainSaga';

export function* mainSaga() {
  yield all([
    fork(doSaga),
  ])
}