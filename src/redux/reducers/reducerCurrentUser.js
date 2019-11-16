import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE,
  ADD_NEW_EXERCISE_TO_STORE,
  DELETE_EXERCISE_FROM_STORE,
  ADD_TRAINING_EXERCISE_TO_STORE
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  // email: '',
  // exercises: {},
  // schedule: {},
  // username: ''
};

function currentUser(state = initialState, action) {
  switch (action.type) {

    case ADD_AUTH_USER_DATA_TO_STORE:
      return merge(state, action.data);

    case CLEAR_AUTH_USER_DATA_FROM_STORE:
      return (state = initialState);

    case ADD_NEW_EXERCISE_TO_STORE:
      return { ...state, exercises: { ...state.exercises, ...action.data } }

    case DELETE_EXERCISE_FROM_STORE:
      const { exercises: { [action.data]: value, ...exercises } } = state
      return { ...state, exercises };

    case ADD_TRAINING_EXERCISE_TO_STORE:
      return {
        ...state, schedule: {
          ...state.schedule,
          [action.today]: {
            ...state.schedule[action.today],
            ...action.exercise
          }
        }
      }

    default:
      return state;
  }
}

export default currentUser;