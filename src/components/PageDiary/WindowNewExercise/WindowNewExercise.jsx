import React from 'react';
import styles from './WindowNewExercise.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormNewExerciseRedux from './FormNewExerciseRedux';
import { changeVisibleWindowNewExerciseToStore } from '../../../redux/actions/actionWindowNewExercise';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { withRouter } from 'react-router-dom';
import { doAddNewExercise } from '../../../redux/actions/actionWindowNewExercise';

const WindowNewExercise = (props) => {

  const onSubmit = (data) => {
    props.doAddNewExercise(data, props.history);
  }

  const onClick = () => {
    props.changeVisibleWindowNewExerciseToStore(false);
  }

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowNewExerciseVisible : styles.windowNewExerciseHide}
    >
      <div className={styles.window}>
        <FormNewExerciseRedux onSubmit={onSubmit} />
        <div className={styles.wrapperButton}>
          <button
            className={styles.button}
            onClick={onClick}
          >
            {props.dictionary.windowNewExerciseCancel}
          </button>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowNewExercise.visible
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowNewExerciseToStore,
  doAddNewExercise
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withTranslator(WindowNewExercise)));