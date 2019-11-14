import React from 'react';
import styles from './ListTrainingExercises.module.css'
import TrainingExercise from './TrainingExercise';

const ListTrainingExrcises = () => {
  return (
    <div className={styles.listTrainingExrcises}>
      <TrainingExercise />
      <TrainingExercise />
      <TrainingExercise />
    </div>
  )

}

export default ListTrainingExrcises;