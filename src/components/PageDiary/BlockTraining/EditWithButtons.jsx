import React, { useState, useEffect } from 'react';
import styles from './EditWithButtons.module.scss';
import arrow from '../../../images/arrow.png';
import forward from '../../../images/forward.png';
import { addLabelExerciseToStore } from '../../../redux/actions/actionCurrentUser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const EditWithButtons = (props) => {

  const [label, setLabel] = useState(props.label);

  useEffect(() => {
    return () => {
      props.addLabelExerciseToStore(props.target, props.date, props.exercise, props.number, label)
      // console.log(label)
    }
  }, [label])

  const onClickInput = (event) => {
    event.stopPropagation();
  }

  const onChangeLabel = (event) => {
    setLabel(event.target.value)
  }

  const onClickButtonLeftLabel = (event) => {
    event.stopPropagation();
    setLabel(+label - 1);
    console.log(label)
  }

  const onClickButtonLeftForwardLabel = (event) => {
    event.stopPropagation();
    setLabel(+label - 10);
  }

  const onClickButtonRightLabel = (event) => {
    event.stopPropagation();
    setLabel(+label + 1);
  }

  const onClickButtonRightForwardLabel = (event) => {
    event.stopPropagation();
    setLabel(+label + 10);
  }

  return (
    <div>
      <div className={styles.wrapperText}>
        {props.target}
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
          value={label}
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

const mapStateToProps = (state) => ({
  // visible: state.visibleListExercises.visibleListExercises
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addLabelExerciseToStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditWithButtons);