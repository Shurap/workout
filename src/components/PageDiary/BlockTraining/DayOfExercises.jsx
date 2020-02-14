import React, { useState } from 'react';
import styles from './DayOfExercises.module.scss'
import DateLine from './DateLine';
import ListTrainingExercises from './ListTrainingExercises';

const DayOfExercises = (props) => {

  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className={styles.dayOfExercises}>
      <DateLine
        date={props.date}
        onVisible={onVisible}
      />

      {(visible) ?
        <ListTrainingExercises
          date={props.date}
        /> : null}

      <div className={styles.footer}>
      </div>

    </div>
  )
}

export default DayOfExercises;