import {
  ADD_AUTH_USER_DATA_TO_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = {};

function currentUser(state = initialState, action) {
  switch (action.type) {

    case ADD_AUTH_USER_DATA_TO_STORE:
      return merge(state, action.data);

    default:
      return state;
  }
}

export default currentUser;