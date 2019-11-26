import { takeEvery, put } from 'redux-saga/effects';
import { DO_ADD_NEW_CLEAR_EXERCISE } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addNewClearExerciseToStore } from '../../redux/actions/actionCurrentUser';

function* doAddNewClearExerciseSaga({ date, exercise, array }) {
  try {
    yield put(loadingBeginToStore());
    const id = array[array.length - 1].id;
    array.push({ count: '0', id: id + 1, wight: '0' });
    
    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/schedule/${date}/${exercise}`);
    yield ref.set(array);
    yield put(loadingEndToStore());
    yield put(addNewClearExerciseToStore(date, exercise, array));
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* addNewClearExerciseSaga() {
  yield takeEvery(DO_ADD_NEW_CLEAR_EXERCISE, doAddNewClearExerciseSaga);
}