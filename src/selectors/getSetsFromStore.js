import { createSelector } from 'reselect';

export const getSetsFromStore = createSelector(
  (state, exercise, date) => state.currentUser.schedule,
  (state, exercise, date) => exercise,
  (state, exercise, date) => date,
  (schedule, exercise, date) => {
    
    const exitData = schedule[date][exercise];
    return exitData;
  }
);