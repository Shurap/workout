import {
  CHANGE_VISIBLE_LIST_EXERCISES
} from '../constants';
import { merge } from 'ramda';

const initialState = { visibleListExercises: true };

function visibleListExercises(state = initialState, action) {
  switch (action.type) {

    case CHANGE_VISIBLE_LIST_EXERCISES:
      return merge(state, { visibleListExercises: action.data })

    default:
      return state;
  }
}

export default visibleListExercises;