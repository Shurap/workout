import React from 'react';
import styles from './EditWithButtons.module.scss';
import arrow from '../../../images/arrow.png';
import forward from '../../../images/forward.png';
import { addLabelExerciseToStore } from '../../../redux/actions/actionCurrentUser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const EditWithButtons = (props) => {

  const onClickInput = (event) => {
    event.stopPropagation();
  }

  const onChangeLabel = (event) => {
    props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, event.target.value)
  }

  const onClickButtonLeftLabel = (event) => {
    event.stopPropagation();
    const newLabel = (+props.label - 1);
    props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, newLabel)
  }

  const onClickButtonLeftForwardLabel = (event) => {
    event.stopPropagation();
    const newLabel = (+props.label - 10);
    props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, newLabel)
  }

  const onClickButtonRightLabel = (event) => {
    event.stopPropagation();
    const newLabel = (+props.label + 1);
    props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, newLabel)
  }

  const onClickButtonRightForwardLabel = (event) => {
    event.stopPropagation();
    const newLabel = (+props.label + 10);
    props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, newLabel)
  }

  return (
    <div>
      <div className={styles.wrapperText}>
        {props.note}
      </div>
      <div className={styles.wrapperEditButtons}>
        <img
          className={styles.buttonLeft}
          src={forward}
          onClick={onClickButtonLeftForwardLabel}
          alt=""
        />
        <img
          className={styles.buttonLeft}
          src={arrow}
          onClick={onClickButtonLeftLabel}
          alt=""
        />
        <input
          className={styles.edit}
          value={props.label}
          onChange={onChangeLabel}
          onClick={onClickInput}
        />
        <img
          className={styles.buttonRight}
          src={arrow}
          onClick={onClickButtonRightLabel}
          alt=""
        />
        <img
          className={styles.buttonRight}
          src={forward}
          onClick={onClickButtonRightForwardLabel}
          alt=""
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  label: state.currentUser.schedule[ownProps.date][ownProps.exercise][ownProps.number][ownProps.target]
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addLabelExerciseToStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditWithButtons);