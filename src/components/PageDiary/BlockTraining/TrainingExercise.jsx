import React from 'react';
import styles from './TrainingExercise.module.scss'
import ListSets from './ListSets';

const TrainingExercise = (props) => {
  return (
    <div className={styles.trainingExercise}>
      <div className={styles.wrapperExercise}>
        {props.exercise}
      </div>
      <ListSets
        exercise={props.exercise}
        date={props.date}
      />
    </div>
  )

}

export default TrainingExercise;