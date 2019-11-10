import {
  ADD_SEARCH_LABEL_TO_STORE,
  ADD_SELECT_LABEL_TO_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  searchLabel: '',
  selectLabel: ''
};

function search(state = initialState, action) {
  switch (action.type) {

    case ADD_SEARCH_LABEL_TO_STORE:
      return merge(state, { searchLabel: action.data });

    case ADD_SELECT_LABEL_TO_STORE:
      return merge(state, { selectLabel: action.data });

    default:
      return state;
  }
}

export default search;