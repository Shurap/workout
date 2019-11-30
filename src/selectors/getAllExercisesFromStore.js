import { createSelector } from 'reselect';

export const getAllExercisesFromStore = createSelector(
  (state, date) => state.currentUser.schedule,
  (state, date) => date,
  (enterData, date) => {
    const exitData = Object.keys(enterData[date]);
    return (exitData)
  }
);