import { createSelector } from 'reselect';
import * as R from 'ramda';

export const getExercisesFromStore = createSelector(
  (state) => state.currentUser.exercises,
  (exercises) => {    
    const arrayExercises = R.toPairs(exercises);
    const exitArray = arrayExercises.map((element) => {
      return [element[0], element[1].date]
    });
    return exitArray;
  }
);