import {
  DO_SIGN_IN
} from '../constants';

export function doSignIn(data) {
  console.log('2');
  return {
    type: DO_SIGN_IN,
    data
  }
}