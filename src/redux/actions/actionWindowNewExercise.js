import {
  CHANGE_VISIBLE_WINDOW_NEW_EXERCISE_TO_STORE,
  ADD_GROUP_IMAGE_TO_STORE
} from '../constants';

export function changeVisibleWindowNewExerciseToStore(data) {
  return {
    type: CHANGE_VISIBLE_WINDOW_NEW_EXERCISE_TO_STORE,
    data
  }
}

export function addGroupImageToStore(data) {
  return {
    type: ADD_GROUP_IMAGE_TO_STORE,
    data
  }
}
