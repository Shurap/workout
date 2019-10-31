import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // doCreateUserWithEmailAndPassword = (email, password) =>
  //   this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //   doSignOut = () => this.auth.signOut();

  //   user = (uid) => this.db.ref(`user/${uid}`);

  //   getWholeUser = async () => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}`);
  //     const snapshot = await ref.once('value');
  //     const result = snapshot.val();
  //     return result;
  //   }

  //   updateDataToBase = (pathInBase, data) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
  //     ref.update(data);
  //   }

  //   setDataToBase = (pathInBase, data) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
  //     ref.set(data);
  //   }

  //   getDataFromBase = async (pathInBase) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/${pathInBase}`);
  //     const snapshot = await ref.once('value');
  //     const result = snapshot.val();
  //     return result;
  //   }

  //   getAllExercisesToStore = async () => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises`);
  //     const snapshot = await ref.once('value');
  //     const result = snapshot.val();
  //     const data = {
  //       exercises: result
  //     }
  //     return data;
  //   }

  //   getTrainingExerciseToStore = async (label, today) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/schedule/${today}/${label}`);
  //     const snapshot = await ref.once('value');
  //     const result = snapshot.val();
  //     const data = {
  //       [label]: result
  //     }
  //     return data;
  //   }

  //   getArrayEditFromBase = async (label, today) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/schedule/${today}/${label}`);
  //     const snapshot = await ref.once('value');
  //     const result = snapshot.val();
  //     return result;
  //   }

  //   deleteExerciseFromBase = (nameExercise) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/exercises/${nameExercise}`);
  //     ref.remove();
  //   }

  //   findAndReplace = async (exerciseNameModal, exerciseNewNameModal) => {
  //     const ref = this.db.ref(`user/${this.auth.currentUser.uid}/schedule/`);
  //     const snapshot = await ref.once("value");

  //     const refEx = this.db.ref(`user/${this.auth.currentUser.uid}/exercises/`);
  //     const snapshotEx = await refEx.once("value");
  //     const dataEx = snapshotEx.val()[exerciseNameModal];
  //     await snapshotEx.ref.update({ [exerciseNewNameModal]: dataEx });
  //     const deleteDataEx = snapshotEx.child(`${exerciseNameModal}`);
  //     await deleteDataEx.ref.remove();

  //     const array = [];

  //     snapshot.forEach(function (child) {
  //       async function f() {
  //         let data = child.val()[exerciseNameModal];
  //         if (!data) return;
  //         await child.ref.update({ [exerciseNewNameModal]: data });

  //         let deleteData = child.child(`${exerciseNameModal}`);
  //         await deleteData.ref.remove();
  //       }
  //       array.push(f());
  //     });

  //     await Promise.all(array);
  //   }
}

// export default Firebase;

export const firebase = new Firebase();