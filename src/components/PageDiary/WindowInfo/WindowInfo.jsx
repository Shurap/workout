import React, { useState } from 'react';
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
import HistoryBox from './HistoryBox';
import imgEdit from '../../../images/edit.png';
import imgSave from '../../../images/save.png';
import Info from './Info';
import Edit from './Edit';

const WindowInfo = (props) => {

  const [modeEdit, setModeEdit] = useState(false);

  const onClose = () => {
    props.changeVisibleWindowInfoToStore(false, '')
    setModeEdit(false);
  }

  const onClickButtonEdit = (event) => {
    event.stopPropagation();
    props.changeVisibleWindowEditToStore(true, props.nameExercise);
    onClose();
    // setModeEdit(true);
    // console.log('edit')
  }

  // const onClickButtonSave = (event) => {
  //   event.stopPropagation();
  //   console.log('save')
  // }

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowInfoVisible :
        styles.windowInfoHide}
      onClick={onClose}
    >
      {(modeEdit) ?
        <Edit /> :
        <Info
          nameExercise={props.nameExercise}
          noteExercise={props.noteExercise}
          imageExercise={props.imageExercise}
          onClickButtonEdit={onClickButtonEdit}
        />
      }

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