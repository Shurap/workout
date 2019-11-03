import {
  LOADING_BEGIN_TO_STORE,
  LOADING_END_TO_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = { loading: false };

function loading(state = initialState, action) {
  switch (action.type) {

    case LOADING_BEGIN_TO_STORE:
      return merge(state, { loading: true });

    case LOADING_END_TO_STORE:
      return merge(state, { loading: false });

    default:
      return state;
  }
}

export default loading;