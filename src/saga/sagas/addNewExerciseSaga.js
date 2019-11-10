import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { DO_ADD_NEW_EXERCISE } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addNewExerciseToStore } from '../../redux/actions/actionCurrentUser';

function* doAddNewExerciseSaga({ data, history }) {
  try {
    yield put(loadingBeginToStore());
    const sendData = {
      [data.name]: {
        date: data.group,
        data: data.notes
      }
    }
    yield firebase.updateDataToBase('exercises', sendData);
    yield put(addNewExerciseToStore(sendData));
    yield put(loadingEndToStore());
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* addNewExerciseSaga() {
  yield takeLatest(DO_ADD_NEW_EXERCISE, doAddNewExerciseSaga);
}