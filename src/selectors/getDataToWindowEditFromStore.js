import { createSelector } from 'reselect';

export const getImageToWindowEditFromStore = createSelector(
  (state) => state.currentUser.exercises[state.windowEdit.exercise],
  (enterData) => {
    return (enterData) ? enterData.date : ''
  }
);

export const getNoteToWindowEditFromStore = createSelector(
  (state) => state.currentUser.exercises[state.windowEdit.exercise],
  (enterData) => {
    return (enterData) ? enterData.data : ''
  }
);