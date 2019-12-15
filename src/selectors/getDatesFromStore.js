import { createSelector } from 'reselect';

export const getDatesFromStore = createSelector(
  (state) => state.currentUser.schedule,
  (state) => state.countVisibleExercises.count,
  (state) => state.countVisibleExercises.activePage,
  (enterData, count, page) => {
    const array = (enterData) ? Object.keys(enterData) : [];
    const begin = (page - 1) * count;
    const end = (page - 1) * count + count;
    return array.reverse().slice(begin, end);
  }
);