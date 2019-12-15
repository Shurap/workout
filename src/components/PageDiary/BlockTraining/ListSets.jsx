import React from 'react';
import styles from './ListSets.module.scss';
import Set from './Set';
import { getSetsFromStore } from '../../../selectors/getSetsFromStore';
import { connect } from 'react-redux';
import imgAdd from '../../../images/add.png';
import { bindActionCreators } from 'redux';
import { doAddNewClearExercise } from '../../../redux/actions/actionDataBase';
import withTranslator from '../../../hocs/withTranslator/withTranslator';


const ListSets = (props) => {

  const onClickButton = () => {
    props.doAddNewClearExercise(props.date, props.exercise, props.currentListSets);
  }

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
        <div className={styles.wrapperWeight}>{props.dictionary.weight}</div>
        <div className={styles.wrapperRepeat}>{props.dictionary.repeat}</div>
      </div>
      <div className={styles.wrapperSets}>
        <div className={styles.scroll}>
          {arraySets}
        </div>

        <div className={styles.wrapperButton}>
          <div className={styles.button} onClick={onClickButton}>
            <img src={imgAdd} alt="" />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(ListSets));