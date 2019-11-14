import React from 'react';
import styles from './ListDayOfExercises.module.css'
import DayOfExercises from './DayOfExercises';

const ListDayOfExercises = () => {
  return (
    <div className={styles.listDayOfExercises}>
      <DayOfExercises />
      <DayOfExercises />
      <DayOfExercises />
    </div>
  )

}

export default ListDayOfExercises;