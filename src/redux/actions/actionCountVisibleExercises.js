import {
  CHANGE_ACTIVE_PAGE_IN_STORE
} from '../constants';

export function changeActivePage(data) {
  return {
    type: CHANGE_ACTIVE_PAGE_IN_STORE,
    data
  }
}