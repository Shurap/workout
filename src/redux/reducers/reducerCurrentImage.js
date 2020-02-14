import {
  CHANGE_CURRENT_IMAGE_IN_STORE, 
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  currentImage: 'No group'
};

function currentImage(state = initialState, action) {
  switch (action.type) {

    case CHANGE_CURRENT_IMAGE_IN_STORE:
      return merge(state, { currentImage: action.data });

    default:
      return state;
  }
}

export default currentImage;