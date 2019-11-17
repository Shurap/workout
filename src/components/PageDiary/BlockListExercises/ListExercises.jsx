import React from 'react';
import styles from './ListExercises.module.scss';
import { connect } from 'react-redux';
import Exercise from './Exercise';
import { getExercisesFromStore } from '../../../selectors';
import withImage from '../../../hocs/withImage/withImage';

const ListExercises = (props) => {

  const arrayExercises = props.currentListExercises.map((element, index) => {
    return (
      <div key={index}>
        <Exercise
          image={element[1]}
          label={element[0]}
        />
      </div>
    );
  });

  return (
    <div className={styles.listExercises}>
      {arrayExercises}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentListExercises: getExercisesFromStore(state),
});

export default connect(mapStateToProps)(withImage(ListExercises));