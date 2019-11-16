import React from 'react';
import styles from './DayOfExercises.module.css'
import DateLine from './DateLine';
import ListTrainingExercises from './ListTrainingExercises';

const DayOfExercises = (props) => {

  return (
    <div className={styles.dayOfExercises}>
      <DateLine
        date={props.date}
      />
      <ListTrainingExercises />
    </div>
  )

}

export default DayOfExercises;