import {
  CHANGE_ACTIVE_PAGE_IN_STORE
} from '../constants';

const initialState = {
  count: 5,
  activePage: 1,
};

function countVisibleExercises(state = initialState, action) {
  switch (action.type) {

    case CHANGE_ACTIVE_PAGE_IN_STORE:
      return { ...state, activePage: action.data };

    default:
      return state;
  }
}

export default countVisibleExercises;