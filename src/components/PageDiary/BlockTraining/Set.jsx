import React, { useState } from 'react';
import styles from './Set.module.scss';
import arrow from '../../../images/arrow.png';

const Set = (props) => {

  const [size, setSize] = useState(false);

  const onClick = () => {
    setSize(!size)
  }

  const onClickButtonLeftWight = (event) => {
    event.stopPropagation();
    console.log('left');
  }

  return (
    <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClick}>
      <div className={styles.wrapperSet}>set {props.number + 1}</div>
      {
        (size) ?
          <div className={styles.wrapperEditButtons}>
            <img
              className={styles.buttonLeft}
              src={arrow} 
              onClick={onClickButtonLeftWight}
            />
            <input
              className={styles.edit}
              defaultValue={props.wight}
            />
            <img
              className={styles.buttonRight}
              src={arrow}
            />
          </div> :
          <div className={styles.wrapperWight}>{props.wight}</div>
      }
      <div className={styles.wrapperCount}>{props.count}</div>
    </div>
  )

}

export default Set;