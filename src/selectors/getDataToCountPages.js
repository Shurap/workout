import { createSelector } from 'reselect';

export const getArrayPages = createSelector(
  (state) => state.currentUser.schedule,
  (state) => state.countVisibleExercises.count,
  (enterData, count) => {
    const array = (enterData) ? Object.keys(enterData) : [];
    const pagesCount = Math.ceil(array.length / count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }
);