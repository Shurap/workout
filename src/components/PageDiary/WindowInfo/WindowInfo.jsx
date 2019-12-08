import React from 'react';
import { connect } from 'react-redux';
import styles from './WindowInfo.module.scss';
import { bindActionCreators } from 'redux';
import { changeVisibleWindowInfoToStore } from '../../../redux/actions/actionWindowInfo';
import {
  getNoteToWindowInfoFromStore,
  getImageToWindowInfoFromStore,
  // getThreeExercisesToWindowInfoFromStore
} from '../../../selectors/getDataToWindowInfoFromStore';
import withImages from '../../../hocs/withImage/withImage';
import HistoryBox from './HistoryBox';

const WindowInfo = (props) => {

  const onClose = () => {
    props.changeVisibleWindowInfoToStore(false)
  }

  // console.log(props.threeExercises)

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowInfoVisible : styles.windowInfoHide}
      onClick={onClose}
    >
      <div className={styles.window}>
        <div className={styles.block}>
          <img className={styles.image} src={props.imageShow[props.imageExercise]} alt="" />
        </div>

        <div className={styles.block}>
          <div className={styles.wrapperExercise}>
            {props.nameExercise}
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.wrapperNote}>
            {props.noteExercise}
          </div>
        </div>

        <HistoryBox />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowInfo.visible,
  noteExercise: getNoteToWindowInfoFromStore(state),
  imageExercise: getImageToWindowInfoFromStore(state),
  nameExercise: state.windowInfo.exercise,
  // threeExercises: getThreeExercisesToWindowInfoFromStore(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowInfoToStore
}, dispatch);

export default withImages(connect(mapStateToProps, mapDispatchToProps)(WindowInfo));