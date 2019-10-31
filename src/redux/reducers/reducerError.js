import {
  ADD_ERROR_TO_STORE,
  CLEAR_ERROR_FROM_STORE
} from '../constants';

const initialState = { error: '' };

function error(state = initialState, action) {
  switch (action.type) {

    case ADD_ERROR_TO_STORE:
      return { ...state, error: action.data };

    case CLEAR_ERROR_FROM_STORE:
      return { ...state, error: '' };

    default:
      return state;
  }
}

export default error;