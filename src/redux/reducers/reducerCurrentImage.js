import {
  CHANGE_IMAGE_IN_STORE, 
} from '../constants';
import { merge } from 'ramda';

const initialState = {
  currentImage: 'None'
};

function currentImage(state = initialState, action) {
  switch (action.type) {

    case CHANGE_IMAGE_IN_STORE:
      return merge(state, { currentImage: action.data });

    default:
      return state;
  }
}

export default currentImage;