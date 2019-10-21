import React from 'react';
import styles from './Svg.module.css';

const SvgUser = () => {
  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} x="0px" y="0px" viewBox="-255 347 100 100" height="40px" width="40px">
        <path className={styles.path} strokeWidth="3.5"
        d="M-203.7,350.3c-6.8,0-12.4,6.2-12.4,13.8c0,4.5,2.4,8.6,5.4,11.1c0,0,2.2,1.6,1.9,3.7c-0.2,1.3-1.7,2.8-2.4,2.8c-0.7,0-6.2,0-6.2,0
           c-6.8,0-12.3,5.6-12.3,12.3v2.9v14.6c0,0.8,0.7,1.5,1.5,1.5h10.5h1h13.1h13.1h1h10.6c0.8,0,1.5-0.7,1.5-1.5v-14.6v-2.9
           c0-6.8-5.6-12.3-12.3-12.3c0,0-5.5,0-6.2,0c-0.8,0-2.3-1.6-2.4-2.8c-0.4-2.1,1.9-3.7,1.9-3.7c2.9-2.5,5.4-6.5,5.4-11.1
           C-191.3,356.5-196.9,350.3-203.7,350.3L-203.7,350.3z"/>
      </svg>
    </div>
  )
}

export default SvgUser;