import React from 'react';
import styles from './TrainingExercise.module.css'
import ListSets from './ListSets';

const TrainingExercise = () => {
  return (
    <div className={styles.trainingExercise}>
      <ListSets />
    </div>
  )

}

export default TrainingExercise;