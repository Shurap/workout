import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE,
  ADD_NEW_EXERCISE_TO_STORE,
  DELETE_EXERCISE_FROM_STORE,
  DO_DELETE_EXERCISE,
  ADD_TRAINING_EXERCISE_TO_STORE,
  ADD_LABEL_EXERCISE_TO_STORE,
  ADD_NEW_CLEAR_EXERCISE_TO_STORE,
  DELETE_SET_FROM_STORE,
} from '../constants';

export function addAuthUserDataToStore(data) {
  return {
    type: ADD_AUTH_USER_DATA_TO_STORE,
    data
  }
}

export function clearAuthUserDataFromStore() {
  return {
    type: CLEAR_AUTH_USER_DATA_FROM_STORE,
  }
}

export function addNewExerciseToStore(data) {
  return {
    type: ADD_NEW_EXERCISE_TO_STORE,
    data
  }
}

export function doDeleteExercise(data) {
  return {
    type: DO_DELETE_EXERCISE,
    data
  }
}

export function deleteExerciseFromStore(data) {
  return {
    type: DELETE_EXERCISE_FROM_STORE,
    data
  }
}

export function addTrainingExerciseToStore(exercise, today) {
  return {
    type: ADD_TRAINING_EXERCISE_TO_STORE,
    exercise,
    today
  }
}

export function addLabelExerciseToStore(target, date, exercise, id, label) {
  return {
    type: ADD_LABEL_EXERCISE_TO_STORE,
    target,
    date,
    exercise,
    id,
    label
  }
}

export function addNewClearExerciseToStore(date, exercise, array) {
  return {
    type: ADD_NEW_CLEAR_EXERCISE_TO_STORE,
    date,
    exercise,
    array
  }
}

export function deleteSetFromStore(date, exercise, newArray) {
  return {
    type: DELETE_SET_FROM_STORE,
    date,
    exercise,
    newArray
  }
}