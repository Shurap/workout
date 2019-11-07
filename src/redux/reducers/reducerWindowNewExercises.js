import {
  CHANGE_VISIBLE_WINDOW_NEW_EXERCISE_TO_STORE, 
  ADD_GROUP_IMAGE_TO_STORE,
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  visible: false,
  groupImage: 'None'
};

function windowNewExercise(state = initialState, action) {
  switch (action.type) {

    case CHANGE_VISIBLE_WINDOW_NEW_EXERCISE_TO_STORE:
      return merge(state, { visible: action.data });

    case ADD_GROUP_IMAGE_TO_STORE:
      return merge(state, { groupImage: action.data });

    default:
      return state;
  }
}

export default windowNewExercise;