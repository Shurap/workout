import {
  CHANGE_VISIBLE_WINDOW_INFO_TO_STORE,
} from '../constants';

export function changeVisibleWindowInfoToStore(visible, exercise) {
  return {
    type: CHANGE_VISIBLE_WINDOW_INFO_TO_STORE,
    visible,
    exercise
  }
}