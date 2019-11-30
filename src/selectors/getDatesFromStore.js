import { createSelector } from 'reselect';

export const getDatesFromStore = createSelector(
  (state) => state.currentUser.schedule,
  (enterData) => {
    return (enterData) ? Object.keys(enterData) : [];
  }
);