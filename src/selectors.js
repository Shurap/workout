import { createSelector } from 'reselect';

export const getExercisesFromStore = createSelector(
  (state) => state.currentUser.exercises,
  (exercises) => {
    const enterProducts = (exercises) ? Object.keys(exercises) : [];
    return enterProducts;
  }
);