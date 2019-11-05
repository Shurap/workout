import React from 'react';
import FormAddNewExerciseRedux from './FormAddNewExerciseRedux';

const AddNewExercise = (props) => {

const onSubmit = (data) => {
  console.log(data)
}

return(
  <div>
    <FormAddNewExerciseRedux onSubmit={onSubmit} />
  </div>
)
}

export default AddNewExercise;