import React from 'react';
import styles from './WindowEdit.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormEditRedux from './FormEditRedux';
import { doChangeExercise } from '../../../redux/actions/actionDataBase';

const WindowEdit = (props) => {

  const onSubmit = (data) => {
    // console.log('submit', props.exerciseName)
    props.doChangeExercise(data, props.exerciseName);
  }

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowEditVisible :
        styles.windowEditHide}
    >
      <FormEditRedux onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowEdit.visible,
  exerciseName: state.windowEdit.exercise,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doChangeExercise
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WindowEdit);