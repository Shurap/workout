import { takeEvery, take, put } from 'redux-saga/effects';
import { DO_SIGN_IN } from '../redux/constants';
import { doSignIn } from '../redux/actions/actionSignIn';

function* doSignInSaga(data) {
  console.log('data', data);
}

export function* mainSaga() {
  console.log('saga!!!')
  yield take(DO_SIGN_IN);
  yield doSignInSaga(doSignIn.data);
  console.log('saga')
}






// export function* testSaga() {
//   console.log('testSaga')
//   yield take(ADD_AUTH_USER_DATA);
//   yield addUserSaga();


// onSubmit = event => {
//   event.preventDefault();
//   const { email, password } = this.state;

//   this.props.firebase
//     .doSignInWithEmailAndPassword(email, password)

//     .then(() => {
//       this.props.addAuthUserData({});
//       // this.props.firebase.getWholeUser()
//       //   .then((currentUserData) => this.props.addAuthUserData(currentUserData));
//       this.setState({ ...INITIAL_STATE });
//       this.props.firebase.auth.onAuthStateChanged((authUser) => {
//           return (authUser) ? this.props.changeAuthStatus(true) : this.props.changeAuthStatus(false);
//         });
//         this.props.history.push('/home');
//     })

//     .catch((error) => {
//       this.setState({ error });
//     });
// };