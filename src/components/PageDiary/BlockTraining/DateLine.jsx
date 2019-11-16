import React from 'react';
import styles from './DateLine.module.css'

const DateLine = (props) => {
return(
  <div className={styles.dateLine}>
    {props.date}
  </div>
) 
  
}

export default DateLine;