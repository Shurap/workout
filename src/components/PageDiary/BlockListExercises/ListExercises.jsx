import React, { Component } from 'react';
import styles from './ListExercises.module.css';
import { connect } from 'react-redux';
import Exercise from './Exercise';
import { getExercisesFromStore } from '../../../selectors';

// const arrayExercises = .map((element, index) => {
//   return (
//     <div key={index}>
//       <Exercise
//         label={element}
//         onSentExercise={this.onSentExercise}
//       />
//     </div>
//   );
// });


const ListExercises = (props) => {

  // const memoizeCurrentListExercises = useCallback(required(props.dictionary.errorRequired),
  //   [props.dictionary.errorRequired]);

  console.log('from component', props.currentListExercises);

  return (
    <div>
      {/* {props.currentListExercises} */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentListExercises: getExercisesFromStore(state),
});


export default connect(mapStateToProps)(ListExercises);