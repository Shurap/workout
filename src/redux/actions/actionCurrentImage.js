import {
  CHANGE_CURRENT_IMAGE_IN_STORE
} from '../constants';

export function changeCurrentImageInStore(data) {
  return {
    type: CHANGE_CURRENT_IMAGE_IN_STORE,
    data
  }
}