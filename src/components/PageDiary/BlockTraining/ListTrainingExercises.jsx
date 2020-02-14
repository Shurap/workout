import React from 'react';
import styles from './ListTrainingExercises.module.scss'
import TrainingExercise from './TrainingExercise';
import { connect } from 'react-redux';
import { getAllExercisesFromStore } from '../../../selectors/getAllExercisesFromStore';

const ListTrainingExrcises = (props) => {

  const arrayOfExercises = props.currentListExercises.map((element, index) => {
    return (
      <TrainingExercise
        key={index}
        exercise={element}
        date={props.date}
      />
    )
  });

  return (
    <div className={styles.listTrainingExrcises}>
      {arrayOfExercises}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  currentListExercises: getAllExercisesFromStore(state, ownProps.date),
});

export default connect(mapStateToProps)(ListTrainingExrcises);