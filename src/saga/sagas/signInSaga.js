import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { DO_SIGN_IN } from '../../redux/constants';
import { addErrorToStore } from '../../redux/actions/actionError';
import { changeAuthStatusInStore } from '../../redux/actions/actionAuthStatus';
import { firebase } from '../../firebase/firebase';

function* doSignInSaga({ data }) {
  try {
    const authUser = yield firebase.doSignInWithEmailAndPassword(data.email, data.password);
    yield put(changeAuthStatusInStore(!!authUser));
    yield getWholeUserSaga();
  } catch (error) {
    yield put(addErrorToStore(error));
  }
}

function* getWholeUserSaga() {
  try {
    const ref = firebase.db.ref(`user/${firebase.auth.currentUser.uid}`);
    const snapshot = yield ref.once('value');
    const result = snapshot.val();
    console.log(result);
    // yield put(addAuthUserDataToStore(result));
  } catch (error) {
    yield put(addErrorToStore(error));
  }
}

export function* signInSaga() {
  yield takeLatest(DO_SIGN_IN, doSignInSaga);
}
