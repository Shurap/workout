import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { DO_SIGN_IN } from '../../redux/constants';
import { addErrorToStore } from '../../redux/actions/actionError';
import { changeAuthStatusInStore } from '../../redux/actions/actionAuthStatus';
import { addAuthUserDataToStore } from '../../redux/actions/actionCurrentUser';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading'
import { firebase } from '../../firebase/firebase';


function* doSignInSaga({ data, history }) {
  try {
    yield put(loadingBeginToStore());
    const authUser = yield firebase.doSignInWithEmailAndPassword(data.email, data.password);
    yield put(changeAuthStatusInStore(!!authUser));
    yield getWholeUserSaga(history);
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

function* getWholeUserSaga(history) {
  try {
    const ref = firebase.db.ref(`user/${firebase.auth.currentUser.uid}`);
    const snapshot = yield ref.once('value');
    const result = snapshot.val();
    yield put(addAuthUserDataToStore(result));
    yield put(loadingEndToStore());
    yield history.push('/diary');
  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* signInSaga() {
  yield takeLatest(DO_SIGN_IN, doSignInSaga);
}
