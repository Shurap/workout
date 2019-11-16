import { createSelector } from 'reselect';
import * as R from 'ramda';

export const getExercisesFromStore = createSelector(
  (state) => state.currentUser.exercises,
  (state) => state.search.searchLabel,
  (state) => state.search.selectLabel,
  (exercises, searchLabel, selectLabel) => {

    const arrayExercises = R.toPairs(exercises);

    // sort
    arrayExercises.sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      return 0;
    });

    const exitExercises = arrayExercises.map((element) => {
      return [element[0], element[1].date]
    });

    const exitExercisesWithSearch = exitExercises.filter((element) => {
      return element[0].toLowerCase().indexOf(searchLabel.toLowerCase()) > -1
    });

    if (selectLabel === 'All group') {
      const exitExercisesWithSearchSelect = exitExercisesWithSearch;
      return exitExercisesWithSearchSelect;
    } else {
      const exitExercisesWithSearchSelect = exitExercisesWithSearch.filter((element) => {
        return element[1].toLowerCase().indexOf(selectLabel.toLowerCase()) > -1
      });
      return exitExercisesWithSearchSelect;
    }
  }
);

export const getDatesFromStore = createSelector(
  (state) => state.currentUser.schedule,
  (enterData) => {
    return (enterData) ? Object.keys(enterData) : [];
  }
);



export const getSetsFromStore = createSelector(
  (state) => state.currentUser.schedule,
  (exercises) => {
    return exercises;
  }
);

