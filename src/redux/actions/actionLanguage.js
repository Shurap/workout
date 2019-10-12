import {
  CHANGE_LANGUAGE
} from '../constants';

export function changeLanguage(data) {
  return {
    type: CHANGE_LANGUAGE,
    data
  }
}