import {
  LOADING_BEGIN_TO_STORE,
  LOADING_END_TO_STORE
} from '../constants';

export function loadingBeginToStore() {
  return {
    type: LOADING_BEGIN_TO_STORE
  }
}

export function loadingEndToStore() {
  return {
    type: LOADING_END_TO_STORE
  }
}