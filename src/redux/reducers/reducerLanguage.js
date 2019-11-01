import {
  CHANGE_LANGUAGE
} from '../constants';
import { merge } from 'ramda';

const initialState = { language: 'en' };

function language(state = initialState, action) {
  switch (action.type) {

    case CHANGE_LANGUAGE:
      // return {...state, language: action.data};
      return merge(state, {language: action.data})

    default:
      return state;
  }
}

export default language;

