import { DO_DELETE_EXERCISE } from "../../redux/constants";
import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import { deleteExerciseFromStore } from '../../redux/actions/actionCurrentUser';

function* doDeleteExerciseSaga({ data }) {
  try {
    yield put(loadingBeginToStore());
    yield firebase.deleteExerciseFromBase(data);
    yield put(deleteExerciseFromStore(data));


    yield put(loadingEndToStore());
  } catch(error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}



  export function* deleteExerciseSaga() {
    yield takeLatest(DO_DELETE_EXERCISE, doDeleteExerciseSaga);
  }