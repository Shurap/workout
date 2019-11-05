import React from 'react';
import ListExercises from './ListExercises';
import AddNewExercise from './AddNewExercise';

const BlockListExercise = () => {
  return (
    <div>
      <AddNewExercise />
      <ListExercises />
    </div>
  )
}

export default BlockListExercise;