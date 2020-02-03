import { takeEvery, put } from 'redux-saga/effects';
import { DO_ADD_NEW_EXERCISE } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addNewExerciseToStore } from '../../redux/actions/actionCurrentUser';
import { changeVisibleWindowNewExerciseToStore } from '../../redux/actions/actionWindowNewExercise';

function* doAddNewExerciseSaga({ data, history }) {
  try {
    yield put(loadingBeginToStore());
    const sendData = {
      [data.name]: {
        date: (data.group) ? data.group : 'No group',
        data: (data.notes) ? data.notes : ''
      }
    }
    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/exercises`);
    yield ref.update(sendData);
    yield put(addNewExerciseToStore(sendData));
    yield put(loadingEndToStore());
    yield put(changeVisibleWindowNewExerciseToStore(false));
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* addNewExerciseSaga() {
  yield takeEvery(DO_ADD_NEW_EXERCISE, doAddNewExerciseSaga);
}