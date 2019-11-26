import React from 'react';
import styles from './ListSets.module.scss';
import Set from './Set';
import { getSetsFromStore } from '../../../selectors';
import { connect } from 'react-redux';
import imgAdd from '../../../images/add.png';
import { bindActionCreators } from 'redux';
import { doAddNewClearExercise } from '../../../redux/actions/actionDataBase';

const ListSets = (props) => {

  const onClickButton = () => {
    // console.log('onclick', props.currentListSets)
    props.doAddNewClearExercise(props.date, props.exercise, props.currentListSets);
  }

  console.log('component', props.currentListSets);

  const arraySets = props.currentListSets.map((element, index) => {
    return (
      <Set
        key={element.id}
        count={element.count}
        weight={element.wight}
        number={index}
        date={props.date}
        exercise={props.exercise}

      />
    )
  });

  return (
    <div className={styles.listSets}>
      <div className={styles.wrapperText}>
        <div className={styles.wrapperWeight}>weight</div>
        <div className={styles.wrapperRepeat}>repeat</div>
      </div>
      <div className={styles.wrapperSets}>
        <div className={styles.scroll}>
          {arraySets}
        </div>

        <div className={styles.button} onClick={onClickButton}>
          {/* {props.dictionary.panelButtonCancel} */}
          <img src={imgAdd} alt="" />
        </div>

      </div>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  currentListSets: getSetsFromStore(state, ownProps.exercise, ownProps.date),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doAddNewClearExercise
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListSets);