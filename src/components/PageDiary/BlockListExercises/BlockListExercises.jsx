import React from 'react';
import ListExercises from './ListExercises';
import Search from './Search';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeVisibleWindowNewExerciseToStore } from '../../../redux/actions/actionWindowNewExercise';
import styles from './BlockListExercises.module.css';

const BlockListExercise = (props) => {

  const onClick = () => {
    props.changeVisibleWindowNewExerciseToStore(true);
  }

  return (
    <div className={(props.visibleListExercise) ? styles.blockListExercisesVisible : styles.blockListExercisesHide}>
      <div className={styles.wrapperButton}>
        <button
          className={styles.button}
          onClick={onClick}
        >
          {props.dictionary.blockExercisesNew}
        </button>
      </div>
      <Search />
      <ListExercises />
    </div>
  )
}

const mapStateToProps = (state) => ({ 
  windowVisible: state.windowNewExercise.visible,
  visibleListExercise: state.visibleListExercises.visibleListExercises
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowNewExerciseToStore,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(BlockListExercise));
