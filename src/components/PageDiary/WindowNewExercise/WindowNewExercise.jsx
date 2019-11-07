import React from 'react';
import styles from './WindowNewExercise.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormNewExerciseRedux from './FormNewExerciseRedux';
// import imgShoulders from '../../../images/shoulders.png';
// import { clearErrorFromStore } from '../../redux/actions/actionError';

const WindowNewExercise = (props) => {

  // const handleClick = () => {
  //   props.clearErrorFromStore();
  // }
  
  const onSubmit = (data) => {
    console.log('submit', data);
  }

  return (
    <div className={(props.windowVisible) ? styles.windowNewExerciseVisible : styles.windowNewExerciseHide}>
      {/* <img src={imgShoulders}></img> */}
      {/* <select>
        <option value='en'>shoulders</option>
        <option value='ru'>triceps</option>
      </select> */}
      <FormNewExerciseRedux onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowNewExercise.visible
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  // clearErrorFromStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WindowNewExercise);