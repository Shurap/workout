import React from 'react';
import styles from './History.module.scss';

const History = (props) => {

  const dataIn = props.data.map((element, index) => {
    return (
      <div
        className={styles.history}
        key={index}
      >
        <div>
          {element.wight}
        </div>
        <div>
          {element.count}
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className={styles.wrapperDate}>
        {props.date}
      </div>
      <div className={styles.wrapperLegend}>
        <div>rep</div>
        <div>wgh</div>
      </div>
      <div className={styles.wrapperData}>
        {dataIn}
      </div>
    </div>
  )
}

export default History;