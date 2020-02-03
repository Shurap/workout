import { takeEvery, put } from 'redux-saga/effects';
import { DO_ADD_VALUE_SET } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';

function* doAddValueSetSaga({ date, exercise, array }) {
  try {
    yield put(loadingBeginToStore());
    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/schedule/${date}/${exercise}`);
    yield ref.set(array);
    yield put(loadingEndToStore());
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* addValueSetSaga() {
  yield takeEvery(DO_ADD_VALUE_SET, doAddValueSetSaga);
}