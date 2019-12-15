import React, { useState } from 'react';
import styles from './Set.module.scss';
import imgDelete from '../../../images/delete.png';
import EditWithButtons from './EditWithButtons';
import { connect } from 'react-redux';
import { getSetsFromStore } from '../../../selectors/getSetsFromStore';
import { bindActionCreators } from 'redux';
import { doDeleteSet, doAddValueSet } from '../../../redux/actions/actionDataBase';
import withTranslator from '../../../hocs/withTranslator/withTranslator';

const Set = (props) => {

  const [size, setSize] = useState(false);

  const onClickPanel = () => {
    setSize(true)
  }

  const onClickClose = (event) => {
    event.stopPropagation();
    props.doAddValueSet(props.date, props.exercise, props.currentListSets)
    setSize(false)
  }

  const onClickButtonDelete = (event) => {
    event.stopPropagation();
    props.doDeleteSet(props.date, props.exercise, props.number, props.currentListSets);
    setSize(false)
  }

  return (
    <div>

      <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClickPanel}>

        <div className={styles.wrapperSetImage}>
          <div className={(size) ? styles.wrapperSetBig : styles.wrapperSetSmall}>
            {props.dictionary.set} {props.number + 1}
          </div>

          <div className={styles.imgDelete} onClick={onClickButtonDelete}>
            {(size) ? <img src={imgDelete} alt="" /> : null}
          </div>
        </div>


        {
          (size) ?
            <EditWithButtons
              note={props.dictionary.weight}
              target="wight"
              label={props.weight}
              date={props.date}
              exercise={props.exercise}
              number={props.number}
            /> :
            <div className={styles.wrapperWeight}>{props.weight}</div>
        }

        {
          (size) ?
            <EditWithButtons
              note={props.dictionary.repeat}
              target="count"
              label={props.count}
              date={props.date}
              exercise={props.exercise}
              number={props.number}
            /> :
            <div className={styles.wrapperRepeat}>{props.count}</div>
        }
      </div>
      <div
        className={(size) ? styles.visibleBack : styles.hideBack}
        onClick={onClickClose}
      >
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  currentListSets: getSetsFromStore(state, ownProps.exercise, ownProps.date),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doDeleteSet,
  doAddValueSet
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(Set));