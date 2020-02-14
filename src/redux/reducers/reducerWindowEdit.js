import {
  CHANGE_VISIBLE_WINDOW_EDIT_TO_STORE
} from '../constants';

const initialState = {
  visible: false,
  exercise: ''
};

function windowEdit(state = initialState, action) {
  switch (action.type) {

    case CHANGE_VISIBLE_WINDOW_EDIT_TO_STORE:
      return { ...state, visible: action.visible, exercise: action.exercise };

    default:
      return state;
  }
}

export default windowEdit;