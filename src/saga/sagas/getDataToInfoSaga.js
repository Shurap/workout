/*import { takeEvery, put } from 'redux-saga/effects';
import { DO_GET_DATA_TO_INFO } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
import {
  addDataToWindowInfoToStore,
  changeVisibleWindowInfoToStore
} from '../../redux/actions/actionWindowInfo';

function* doGetDataToInfoSaga({ date, exercise }) {
  try {
    yield put(loadingBeginToStore());

    const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/exercises/${exercise}/data`);
    const snapshot = yield ref.once('value');
    const result = yield snapshot.val();
    yield put(addDataToWindowInfoToStore(result));

    
    
    
    yield put(changeVisibleWindowInfoToStore(true));

    yield put(loadingEndToStore());

  } catch (error) {
    yield put(loadingEndToStore());
    yield put(addErrorToStore(error));
  }
}

export function* getDataToInfoSaga() {
  yield takeEvery(DO_GET_DATA_TO_INFO, doGetDataToInfoSaga);
}*/