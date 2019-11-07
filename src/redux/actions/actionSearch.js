import {
  ADD_SEARCH_LABEL_TO_STORE,
} from '../constants';

export function addSearchLabelToStore(data) {
  return {
    type: ADD_SEARCH_LABEL_TO_STORE,
    data
  }
}