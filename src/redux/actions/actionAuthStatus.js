import {
  CHANGE_AUTH_STATUS_IN_STORE
} from '../constants';

export function changeAuthStatusInStore(data) {
  return {
    type: CHANGE_AUTH_STATUS_IN_STORE,
    data
  }
}