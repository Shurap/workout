import React from 'react';
import ListExercises from './ListExercises';
import Search from './Search';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeVisibleWindowNewExerciseToStore,
} from '../../../redux/actions/actionWindowNewExercise';

const BlockListExercise = (props) => {

  const onClick = () => {
    // props.changeVisibleWindowNewExerciseToStore(!props.windowVisible)
    props.changeVisibleWindowNewExerciseToStore(true);

  }

  return (
    <div>
      
      <button
        /*className={styles.button}*/
        onClick={onClick}
      >
        {props.dictionary.blockExercisesNew}
      </button>
      <Search />
      <ListExercises />
    </div>
  )
}

const mapStateToProps = (state) => ({ windowVisible: state.windowNewExercise.visible });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowNewExerciseToStore,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(BlockListExercise));
