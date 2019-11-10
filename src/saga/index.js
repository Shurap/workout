import { all, fork } from 'redux-saga/effects';
import { signInSaga } from './sagas/signInSaga';
import { registerSaga } from './sagas/registerSaga';
import { signOutSaga } from './sagas/signOutSaga';
import { addNewExerciseSaga } from './sagas/addNewExerciseSaga';
import { deleteExerciseSaga } from './sagas/deleteExerciseSaga';

export function* mainSaga() {
  yield all([
    fork(signInSaga),
    fork(registerSaga),
    fork(signOutSaga),
    fork(addNewExerciseSaga),
    fork(deleteExerciseSaga),
  ])
}