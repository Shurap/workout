import { takeLatest, takeEvery, take, put } from 'redux-saga/effects';
import { DO_ADD_NEW_EXERCISE } from '../../redux/constants';
import { firebase } from '../../firebase/firebase';
import { loadingBeginToStore, loadingEndToStore } from '../../redux/actions/actionLoading';
import { addErrorToStore } from '../../redux/actions/actionError';
// import { doAddNewExercise } from '../../redux/actions/actionWindowNewExercise';
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


// const data = {
//   [this.props.searchLabel]: {
//     date: (new Date()).toString(),
//     data: ''
//   }
// }

// try {
//   e.preventDefault();
//   await this.props.firebase.updateDataToBase('exercises', data);
//   const allExercise = await this.props.firebase.getAllExercisesToStore();
//   this.props.addAllExercisesToStore(allExercise);
//   this.props.changeShowStatusModal(false, this.props.searchLabel, '');
// }

// catch (error) {
//   this.setState({ error });
// }



//   updateDataToBase = (pathInBase, data) => {
//     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
//     ref.update(data);
//   }


// function* doRegisterSaga({ data, history }) {
//     try {
//       yield put(loadingBeginToStore());
//       const authUser = yield firebase.auth.createUserWithEmailAndPassword(data.email, data.password);
//       const user = (uid) => firebase.db.ref(`user/${uid}`);
//       const {name, email} = data;
//       yield user(authUser.user.uid).set({username: name, email, /*schedule: {}*/});
//       yield put(doSignIn(data, history));
//     } catch (error) {
//       yield put(loadingEndToStore());
//       yield put(addErrorToStore(error));
//     }
//   }



export function* addNewExerciseSaga() {
  yield takeLatest(DO_ADD_NEW_EXERCISE, doAddNewExerciseSaga);
}