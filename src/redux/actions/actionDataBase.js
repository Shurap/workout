import {
 DO_SENT_EXERCISE
} from '../constants';

export function doSentExercise(data) {
  return {
    type: DO_SENT_EXERCISE,
    data
  }
}