import {
  ADD_AUTH_USER_DATA_TO_STORE
} from '../constants';

export function addAuthUserDataToStore(data) {
  return {
    type: ADD_AUTH_USER_DATA_TO_STORE,
    data
  }
}