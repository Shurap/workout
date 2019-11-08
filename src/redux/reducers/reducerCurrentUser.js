import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE,
  ADD_NEW_EXERCISE_TO_STORE
} from '../constants';
import { merge, update } from 'ramda';

const initialState = {};

function currentUser(state = initialState, action) {
  switch (action.type) {

    case ADD_AUTH_USER_DATA_TO_STORE:
      return merge(state, action.data);

    case CLEAR_AUTH_USER_DATA_FROM_STORE:
      return (state = initialState);

    case ADD_NEW_EXERCISE_TO_STORE:
      // return merge(state.exercises, action.data);
      return {...state, exercises: {...state.exercises, ...action.data}}

    default:
  return state;
}
}

export default currentUser;