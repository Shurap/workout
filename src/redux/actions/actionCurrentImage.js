import {
  CHANGE_IMAGE_IN_STORE
} from '../constants';

export function changeImageInStore(data) {
  return {
    type: CHANGE_IMAGE_IN_STORE,
    data
  }
}