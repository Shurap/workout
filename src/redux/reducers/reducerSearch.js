import {
  ADD_SEARCH_LABEL_TO_STORE,
} from '../constants';
import { merge } from 'ramda';

const initialState = { searchLabel: '' };

function searchLabel(state = initialState, action) {
  switch (action.type) {

    case ADD_SEARCH_LABEL_TO_STORE:
      return merge(state, { searchLabel: action.data });

    default:
      return state;
  }
}

export default searchLabel;