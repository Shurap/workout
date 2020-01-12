import React from 'react';
import { connect } from 'react-redux';
import styles from './WindowInfo.module.scss';
import { bindActionCreators } from 'redux';
import { changeVisibleWindowInfoToStore } from '../../../redux/actions/actionWindowInfo';
import { changeVisibleWindowEditToStore } from '../../../redux/actions/actionWindowEdit';
import {
  getNoteToWindowInfoFromStore,
  getImageToWindowInfoFromStore,
} from '../../../selectors/getDataToWindowInfoFromStore';
import withImages from '../../../hocs/withImage/withImage';
import Info from './Info';

const WindowInfo = (props) => {

  const onClose = () => {
    props.changeVisibleWindowInfoToStore(false, '')
  }

  const onClickButtonEdit = (event) => {
    event.stopPropagation();
    props.changeVisibleWindowEditToStore(true, props.nameExercise);
    onClose();
  }

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowInfoVisible :
        styles.windowInfoHide}
      onClick={onClose}
    >
      <Info
        nameExercise={props.nameExercise}
        noteExercise={props.noteExercise}
        imageExercise={props.imageExercise}
        onClickButtonEdit={onClickButtonEdit}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowInfo.visible,
  noteExercise: getNoteToWindowInfoFromStore(state),
  imageExercise: getImageToWindowInfoFromStore(state),
  nameExercise: state.windowInfo.exercise,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowInfoToStore,
  changeVisibleWindowEditToStore,
}, dispatch);

export default withImages(connect(mapStateToProps, mapDispatchToProps)(WindowInfo));