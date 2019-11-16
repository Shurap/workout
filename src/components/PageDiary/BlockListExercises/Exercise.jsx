import React from 'react';
import styles from './Exercise.module.css'
import withImage from '../../../hocs/withImage/withImage';
import { useState } from 'react';
import imgArrowForward from '../../../images/arrowForward.png';
import imgInfo from '../../../images/info.png';
import imgDelete from '../../../images/delete.png';
import imgCancel from '../../../images/cancel.png';
import imgCheck from '../../../images/check.png';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { doDeleteExercise } from '../../../redux/actions/actionCurrentUser';
import { doSentExercise } from '../../../redux/actions/actionDataBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Exercise = (props) => {

  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const onClick = () => { setVisible(true); }

  const onClickButton = (event) => {
    setVisible(false);
    setVisibleConfirm(false);
    event.stopPropagation();
  }

  const onDelete = (event) => {
    setVisible(false);
    setVisibleConfirm(true)
    event.stopPropagation();
  }

  const onDeleteConfirm = (event) => {
    props.doDeleteExercise(props.label);
    setVisibleConfirm(false)
    event.stopPropagation();
  }

  const onAdd = (event) => {
    event.stopPropagation();
    props.doSentExercise(props.label);
    setVisible(false);

  }

  const PanelConfirm = () => {
    return (
      <div className={(visibleConfirm) ? styles.panelConfirmVisible : styles.panelConfirmHide}>
        <div>
          {props.dictionary.panelButtonQuestion}
        </div>
        <div className={styles.wrapperButtons}>

          <div className={styles.buttonDiv} onClick={onDeleteConfirm}>
            {props.dictionary.panelButtonYes}
            <img src={imgCheck} alt="" />
          </div>

          <div className={styles.buttonDiv} onClick={onClickButton}>
            {props.dictionary.panelButtonNo}
            <img src={imgCancel} alt="" />
          </div>

        </div>
      </div>
    )
  }

  const PanelButton = () => {

    return (
      <div className={(visible) ? styles.panelButtonVisible : styles.panelButtonHide}>

        <div className={styles.buttonDiv} onClick={onClickButton}>
          {props.dictionary.panelButtonCancel}
          <img src={imgCancel} alt="" />
        </div>

        <div className={styles.buttonDiv} onClick={onDelete}>
          {props.dictionary.panelButtonDelete}
          <img src={imgDelete} alt="" />
        </div>

        <div className={styles.buttonDiv} onClick={onClickButton}>
          {props.dictionary.panelButtonInfo}
          <img src={imgInfo} alt="" />
        </div>

        <div className={styles.buttonDiv} onClick={onAdd}>
          {props.dictionary.panelButtonAdd}
          <img src={imgArrowForward} alt="" />
        </div>

      </div>
    )
  }

  return (
    <div
      className={styles.exercise}
      onClick={onClick}
    >
      <PanelButton />
      <PanelConfirm />
      <img
        className={styles.image}
        src={props.imageShow[props.image]}
        alt=""
      ></img>
      <div className={styles.wrapperText}>
        {props.label}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doDeleteExercise,
  doSentExercise
}, dispatch);

export default withTranslator(withImage(connect(null, mapDispatchToProps)(Exercise)));