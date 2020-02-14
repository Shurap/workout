import React from 'react';
import styles from './TrainingExercise.module.scss'
import ListSets from './ListSets';
import imgInfo from '../../../images/info.png'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeVisibleWindowInfoToStore } from '../../../redux/actions/actionWindowInfo';

const TrainingExercise = (props) => {

  const onClickButtonInfo = () => {
    props.changeVisibleWindowInfoToStore(true, props.exercise)
  }

  return (
    <div className={styles.trainingExercise}>
      <div className={styles.wrapperExercise}>

        <div className={styles.imgInfo} onClick={onClickButtonInfo}>
          <img src={imgInfo} alt="" />
        </div>

        {props.exercise}
      </div>
      <ListSets
        exercise={props.exercise}
        date={props.date}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowInfoToStore
}, dispatch);

export default connect(null, mapDispatchToProps)(TrainingExercise);