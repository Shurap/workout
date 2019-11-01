import {
  CHANGE_AUTH_STATUS_IN_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = { authStatus: false };

function authStatus(state = initialState, action) {
  switch (action.type) {

    case CHANGE_AUTH_STATUS_IN_STORE:
      return merge(state, {authStatus: action.data});

    default:
      return state;
  }
}

export default authStatus;