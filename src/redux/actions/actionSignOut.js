import {
  DO_SIGN_OUT
} from '../constants';

export function doSignOut(history) {
  return {
    type: DO_SIGN_OUT,
    history
  }
}