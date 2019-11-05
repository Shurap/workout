import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = {};

function currentUser(state = initialState, action) {
  switch (action.type) {

    case ADD_AUTH_USER_DATA_TO_STORE:
      return merge(state, action.data);

    case CLEAR_AUTH_USER_DATA_FROM_STORE:
      return (state = initialState);

    default:
      return state;
  }
}

export default currentUser;