import { DO_SIGN_OUT } from "../../redux/constants";
import { takeEvery, put } from 'redux-saga/effects';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { clearAuthUserDataFromStore } from '../../redux/actions/actionCurrentUser';
import { changeAuthStatusInStore } from '../../redux/actions/actionAuthStatus';
import { changeActivePage } from '../../redux/actions/actionCountVisibleExercises';
import { addErrorToStore } from '../../redux/actions/actionError';
import { firebase } from '../../firebase/firebase';

function* doSignOutSaga({ history }) {
  try {
    yield put(loadingBeginToStore());
    yield firebase.auth.signOut();
    yield put(changeActivePage(1));
    yield put(clearAuthUserDataFromStore())
    yield put(changeAuthStatusInStore(false));
    yield put(loadingEndToStore());
    yield history.push('/home');
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* signOutSaga() {
  yield takeEvery(DO_SIGN_OUT, doSignOutSaga);
}