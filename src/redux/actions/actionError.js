import {
  ADD_ERROR_TO_STORE,
  CLEAR_ERROR_FROM_STORE
} from '../constants';

export function addErrorToStore(data) {
  return {
    type: ADD_ERROR_TO_STORE,
    data
  }
}

export function clearErrorFromStore() {
  return {
    type: CLEAR_ERROR_FROM_STORE
  }
}
