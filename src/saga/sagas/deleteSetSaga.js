import { takeEvery, put } from 'redux-saga/effects';
import { DO_DELETE_SET } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addNewClearExerciseToStore } from '../../redux/actions/actionCurrentUser';

function* doDeleteSetSaga({ date, exercise, index, array }) {
  try {
    yield put(loadingBeginToStore());
    array.splice(index, 1);
    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/schedule/${date}/${exercise}`);
    yield ref.set(array);
    yield put(loadingEndToStore());
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* deleteSetSaga() {
  yield takeEvery(DO_DELETE_SET, doDeleteSetSaga);
}