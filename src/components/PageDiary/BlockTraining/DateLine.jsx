import React from 'react';
import styles from './DateLine.module.scss';
import imgFold from '../../../images/next.png';

const DateLine = (props) => {

  return (
    <div className={styles.dateLine} onClick={props.onVisible}>
      {props.date}
      <div className={styles.imgFold}>
        <img src={imgFold} alt="" />
      </div>
    </div>
  )

}

export default DateLine;