import React from 'react';
import styles from './ListExercises.module.css';
import { connect } from 'react-redux';
import Exercise from './Exercise';
import { getExercisesFromStore } from '../../../selectors';

const ListExercises = (props) => {

  const arrayExercises = props.currentListExercises.map((element, index) => {
    return (
      <div key={index}>
        <Exercise
          label={element}
        />
      </div>
    );
  });

  return (
    <div>
      {arrayExercises}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentListExercises: getExercisesFromStore(state),
});

export default connect(mapStateToProps)(ListExercises);