import {
  ADD_SEARCH_LABEL_TO_STORE,
  ADD_SELECT_LABEL_TO_STORE
} from '../constants';

export function addSearchLabelToStore(data) {
  return {
    type: ADD_SEARCH_LABEL_TO_STORE,
    data
  }
}

export function addSelectLabelToStore(data) {
  return {
    type: ADD_SELECT_LABEL_TO_STORE,
    data
  }
}