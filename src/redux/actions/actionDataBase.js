import {
 DO_SENT_EXERCISE,
 DO_ADD_NEW_CLEAR_EXERCISE
} from '../constants';

export function doSentExercise(data) {
  return {
    type: DO_SENT_EXERCISE,
    data
  }
}

export function doAddNewClearExercise(date, exercise, array) {
  // console.log('action saga');
  return {
    type: DO_ADD_NEW_CLEAR_EXERCISE,
    date,
    exercise,
    array
  }
}