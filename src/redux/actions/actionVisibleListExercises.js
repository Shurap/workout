import {
  CHANGE_VISIBLE_LIST_EXERCISES
} from '../constants';

export function changeVisibleListExercises(data) {
  return {
    type: CHANGE_VISIBLE_LIST_EXERCISES,
    data
  }
}