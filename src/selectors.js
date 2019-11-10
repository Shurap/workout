import { createSelector } from 'reselect';
import * as R from 'ramda';

export const getExercisesFromStore = createSelector(
  (state) => state.currentUser.exercises, (state) => state.searchLabel.searchLabel,
  (exercises, searchLabel) => {

    const arrayExercises = R.toPairs(exercises);

    const exitExercises = arrayExercises.map((element) => {
      return [element[0], element[1].date]
    });

    const exitExercisesWithSearch = exitExercises.filter((element) => {
      return element[0].toLowerCase().indexOf(searchLabel.toLowerCase()) > -1
    });

    return exitExercisesWithSearch;
  }
);