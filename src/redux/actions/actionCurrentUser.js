import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE,
  ADD_NEW_EXERCISE_TO_STORE
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
