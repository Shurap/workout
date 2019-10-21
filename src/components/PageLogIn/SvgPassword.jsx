import React from 'react';
import styles from './Svg.module.css';

const SvgPassword = () => {
  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} x="0px" y="0px" viewBox="-255 347 100 100" height="40px" width="40px">
        <path className={styles.path} strokeWidth="3.5"
        d="M-191.5,347.8c-11.9,0-21.6,9.7-21.6,21.6c0,4,1.1,7.8,3.1,11.1l-26.5,26.2l-0.9,10h10.6l3.8-5.7l6.1-1.1
        l1.6-6.7l7.1-0.3l0.6-7.2l7.2-6.6c2.8,1.3,5.8,2,9.1,2c11.9,0,21.6-9.7,21.6-21.6C-169.9,357.4-179.6,347.8-191.5,347.8z"/>
      </svg>
    </div>
  )
}

export default SvgPassword;