import {
  CHANGE_VISIBLE_WINDOW_INFO_TO_STORE,
  // ADD_DATA_TO_WINDOW_INFO_TO_STORE,
} from '../constants';

export function changeVisibleWindowInfoToStore(visible, exercise) {
  return {
    type: CHANGE_VISIBLE_WINDOW_INFO_TO_STORE,
    visible,
    exercise
  }
}

// export function addDataToWindowInfoToStore(data) {
//   return {
//     type: ADD_DATA_TO_WINDOW_INFO_TO_STORE,
//     data
//   }
// }