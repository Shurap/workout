import {
  DO_REGISTER
} from '../constants';

export function doRegister(data, history) {
  return {
    type: DO_REGISTER,
    data,
    history
  }
}