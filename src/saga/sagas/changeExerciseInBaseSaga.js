import { DO_CHANGE_EXERCISE } from '../../redux/constants';
import { takeEvery, put, all } from 'redux-saga/effects';
import { addErrorToStore } from '../../redux/actions/actionError';
import { addAuthUserDataToStore } from '../../redux/actions/actionCurrentUser';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading'
import { firebase } from '../../firebase/firebase';
import { changeVisibleWindowEditToStore } from '../../redux/actions/actionWindowEdit';

  function* doChangeExerciseInBaseSaga({ data, exerciseName }) {
    try {
      yield put(loadingBeginToStore());

      const sendData = {
        date: (data.group) ? data.group : 'No group',
        data: (data.notes) ? data.notes : ''
      }
      const refEx = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/exercises/`);
      const snapshotEx = yield refEx.once("value");
      yield snapshotEx.ref.update({ [data.name]: sendData });
      if (data.name !== exerciseName) {
        const deleteDataEx = snapshotEx.child(`${exerciseName}`);
        yield deleteDataEx.ref.remove();
      }

      if (data.name !== exerciseName) {
        const ref = yield firebase.db.ref(`user/${firebase.auth.currentUser.uid}/schedule/`);
        const snapshot = yield ref.once("value");
        yield all(snapshot.forEach(function (child) {
          let dataSchedule = child.val()[exerciseName];
          if (!dataSchedule) return;
          child.ref.update({ [data.name]: dataSchedule });
          let deleteData = child.child(`${exerciseName}`);
          deleteData.ref.remove();
        }))
      }

      yield reloadDB();
      yield put(loadingEndToStore());
      yield put(changeVisibleWindowEditToStore(false, ''));
    } catch (error) {
      yield put(loadingEndToStore());
      yield put(addErrorToStore(error));
    }
  }

function* reloadDB() {
  const ref = firebase.db.ref(`user/${firebase.auth.currentUser.uid}`);
  const snapshot = yield ref.once('value');
  const result = snapshot.val();
  yield put(addAuthUserDataToStore(result));
}

export function* changeExerciseInBaseSaga() {
  yield takeEvery(DO_CHANGE_EXERCISE, doChangeExerciseInBaseSaga);
}