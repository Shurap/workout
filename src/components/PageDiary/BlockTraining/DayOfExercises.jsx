import React from 'react';
import styles from './DayOfExercises.module.css'
import DateLine from './DateLine';
import ListTrainingExercises from './ListTrainingExercises'

const DayOfExercises = () => {
  return (
    <div className={styles.dayOfExercises}>
      <DateLine />
      <ListTrainingExercises/>
    </div>
  )

}

export default DayOfExercises;