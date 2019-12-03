import { DO_SENT_EXERCISE } from "../../redux/constants";
import { takeEvery, put } from 'redux-saga/effects';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addTrainingExerciseToStore } from '../../redux/actions/actionCurrentUser';
import { firebase } from '../../firebase/firebase';

function* doSentExerciseToBaseSaga({ data }) {
  try {
    yield put(loadingBeginToStore());
    const today = new Date().toISOString().split('T')[0];
    const sendData = { [data]: [{ wight: '0', count: '0', id: 0 }] };
    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/schedule/${today}/`);
    yield ref.update(sendData);
    yield put(addTrainingExerciseToStore(sendData, today))
    yield put(loadingEndToStore());
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* sentExerciseToBaseSaga() {
  yield takeEvery(DO_SENT_EXERCISE, doSentExerciseToBaseSaga);
}