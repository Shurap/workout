import {
  ADD_AUTH_USER_DATA_TO_STORE,
  CLEAR_AUTH_USER_DATA_FROM_STORE,
  ADD_NEW_EXERCISE_TO_STORE,
  DELETE_EXERCISE_FROM_STORE,
  ADD_TRAINING_EXERCISE_TO_STORE,
  ADD_LABEL_EXERCISE_TO_STORE,
  ADD_NEW_CLEAR_EXERCISE_TO_STORE,
  DELETE_SET_FROM_STORE,
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  email: '',
  exercises: '',
  schedule: '',
  username: ''
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

    case ADD_LABEL_EXERCISE_TO_STORE:
      const data = { ...state.schedule[action.date][action.exercise][action.id] }
      const newData = { ...data, [action.target]: action.label }
      const array = [
        ...state.schedule[action.date][action.exercise].slice(0, action.id),
        newData,
        ...state.schedule[action.date][action.exercise].slice(action.id + 1)
      ]
      return {
        ...state, schedule: {
          ...state.schedule, [action.date]: {
            ...state.schedule[action.date], [action.exercise]: array
          }
        }
      }

    case ADD_NEW_CLEAR_EXERCISE_TO_STORE:
      const newArray = action.array.slice();
      return {
        ...state, schedule: {
          ...state.schedule, [action.date]: {
            ...state.schedule[action.date], [action.exercise]: newArray
          }
        }
      }

    case DELETE_SET_FROM_STORE:
      return {
        ...state, schedule: {
          ...state.schedule, [action.date]: {
            ...state.schedule[action.date], [action.exercise]: action.newArray
          }
        }
      }

    default:
      return state;
  }
}

export default currentUser;