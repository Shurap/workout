import {
  CHANGE_VISIBLE_WINDOW_EDIT_TO_STORE,
} from '../constants';

export function changeVisibleWindowEditToStore(visible, exercise) {
  return {
    type: CHANGE_VISIBLE_WINDOW_EDIT_TO_STORE,
    visible,
    exercise
  }
}