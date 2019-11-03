import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { DO_REGISTER } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { getWholeUserSaga } from './signInSaga';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { changeAuthStatusInStore } from '../../redux/actions/actionAuthStatus';
import { addErrorToStore } from '../../redux/actions/actionError';
import { doSignIn } from '../../redux/actions/actionSignIn';

function* doRegisterSaga({ data, history }) {
    try {
      yield put(loadingBeginToStore());
      const authUser = yield firebase.auth.createUserWithEmailAndPassword(data.email, data.password);
      const user = (uid) => firebase.db.ref(`user/${uid}`);
      const {name, email} = data;
      yield user(authUser.user.uid).set({username: name, email, /*schedule: {}*/});
      yield put(doSignIn(data, history));
    } catch (error) {
      yield put(loadingEndToStore());
      yield put(addErrorToStore(error));
    }
  }



export function* registerSaga() {
  yield takeLatest(DO_REGISTER, doRegisterSaga);
}