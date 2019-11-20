import React, { useState } from 'react';
import styles from './Set.module.scss'

const Set = (props) => {

  const [size, setSize] = useState(false);

  const onClick = () => {
    setSize(!size)
  }

  return (
    <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClick}>
    <div className={styles.wrapperSet}>set {props.number+1}</div>
    <div className={styles.wrapperWight}>{props.wight}</div>
    <div className={styles.wrapperCount}>{props.count}</div>
      
      
      
    </div>
  )

}

export default Set;