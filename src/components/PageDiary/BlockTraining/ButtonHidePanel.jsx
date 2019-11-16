import React from 'react';
import styles from './ButtonHidePanel.module.css';
import imgNext from '../../../images/next.png';
import imgPrevious from '../../../images/previous.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeVisibleListExercises } from '../../../redux/actions/actionVisibleListExercises';

const ButtonHidePanel = (props) => {

  const onClick = () => {
    (props.visible) ? props.changeVisibleListExercises(false) : props.changeVisibleListExercises(true);
  }

  return (
    <div className={styles.block}>
      <div className={styles.button} onClick={onClick}>
        <img src={(props.visible) ? imgPrevious : imgNext} alt="" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  visible: state.visibleListExercises.visibleListExercises
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleListExercises
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonHidePanel);
