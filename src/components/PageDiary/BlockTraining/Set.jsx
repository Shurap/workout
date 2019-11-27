import React, { useState, useEffect } from 'react';
import styles from './Set.module.scss';
import imgDelete from '../../../images/delete.png';
import forward from '../../../images/forward.png';
import EditWithButtons from './EditWithButtons';
import ReactDOM from 'react-dom';

const Set = (props) => {

  const [size, setSize] = useState(false);

  const onClickPanel = () => {
    setSize(true)
  }

  const onClickClose = (event) => {
    event.stopPropagation();
    setSize(false)
  }

  const onClickButtonDelete = (event) => {
    event.stopPropagation();
    console.log('delete');
    setSize(false)
  }

  return (
    <div>


      <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClickPanel}>

        <div className={styles.wrapperSetImage}>
          <div className={styles.wrapperSet}>set {props.number + 1}</div>

          <div className={styles.imgClose} onClick={onClickButtonDelete}>
            {(size) ? <img src={imgDelete} /> : null}
          </div>
        </div>


        {
          (size) ?
            <EditWithButtons
              target='wight'
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
              target='count'
              label={props.count}
              date={props.date}
              exercise={props.exercise}
              number={props.number}
            /> :
            <div className={styles.wrapperWeight}>{props.count}</div>
        }
      </div>


      <div className={(size) ? styles.visibleBack : styles.hideBack} onClick={onClickClose}></div>
    </div>
  )

}

export default Set;