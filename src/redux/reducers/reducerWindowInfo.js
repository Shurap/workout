import {
  CHANGE_VISIBLE_WINDOW_INFO_TO_STORE,
  // ADD_DATA_TO_WINDOW_INFO_TO_STORE
} from '../constants';

const initialState = {
  visible: false,
  exercise: ''
};

function windowInfo(state = initialState, action) {
  switch (action.type) {

    case CHANGE_VISIBLE_WINDOW_INFO_TO_STORE:
      return { ...state, visible: action.visible, exercise: action.exercise };

    // case ADD_DATA_TO_WINDOW_INFO_TO_STORE:
    //   return { ...state, data: action.data };

    default:
      return state;
  }
}

export default windowInfo;