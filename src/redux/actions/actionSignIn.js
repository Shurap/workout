import {
  DO_SIGN_IN
} from '../constants';

export function doSignIn(data) {
  return {
    type: DO_SIGN_IN,
    data
  }
}