import React from 'react';
import styles from './ListDayOfExercises.module.css'
import DayOfExercises from './DayOfExercises';
import { connect } from 'react-redux';
import { getDatesFromStore } from '../../../selectors/getDatesFromStore';

const ListDayOfExercises = (props) => {

  const arrayDates = props.currentListSets.map((element, index) => {
    return (
      <DayOfExercises
        key={index}
        date={element}
      />
    )
  });

  return (
    <div className={styles.listDayOfExercises}>
      {arrayDates}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentListSets: getDatesFromStore(state),
});

export default connect(mapStateToProps)(ListDayOfExercises);