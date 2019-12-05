import { createSelector } from 'reselect';

export const getNoteToWindowInfoFromStore = createSelector(
  (state) => state.currentUser.exercises[state.windowInfo.exercise],
  (enterData) => {
    return (enterData) ? enterData.data : ''
  }
);

export const getImageToWindowInfoFromStore = createSelector(
  (state) => state.currentUser.exercises[state.windowInfo.exercise],
  (enterData) => {
    return (enterData) ? enterData.date : ''
  }
);

export const getThreeExercisesToWindowInfoFromStore = createSelector(
  (state) => state,
  (state) => {

    const enterData = state.currentUser.schedule;
    let result = [];


    if (enterData) {

      const array = []
      for (const prop in enterData) {
        for (const nextProp in enterData[prop]) {
          if (nextProp === state.windowInfo.exercise) {
            const arrayProps = [];
            enterData[prop][nextProp].forEach(element => {
              arrayProps.push(element);
            });
            array.push({ [prop]: arrayProps });
          }
        }
      }
      result = [
        array[array.length - 3],
        array[array.length - 2],
        array[array.length - 1]
      ];
      // console.log('8', result)
      return result;
    }
    return result = [];

  }
);