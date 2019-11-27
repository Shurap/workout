import {
 DO_SENT_EXERCISE,
 DO_ADD_NEW_CLEAR_EXERCISE,
 DO_DELETE_SET,
} from '../constants';

export function doSentExercise(data) {
  return {
    type: DO_SENT_EXERCISE,
    data
  }
}

export function doAddNewClearExercise(date, exercise, array) {
  return {
    type: DO_ADD_NEW_CLEAR_EXERCISE,
    date,
    exercise,
    array
  }
}

export function doDeleteSet(date, exercise, index, array) {
  return {
    type: DO_DELETE_SET,
    date,
    exercise,
    index,
    array
  }
}