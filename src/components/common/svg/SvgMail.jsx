import React from 'react';
import styles from './Svg.module.css';

const SvgMail = () => {
  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 64 64" height="40px" width="40px">
        <path className={styles.path} strokeWidth="2"
        d="M63.125 9.977a5.004 5.004 0 00-4.131-2.194H5.006c-1.676 0-3.158.842-4.067 2.117l31.16 25.982L63.125 9.977z"/>
        <path className={styles.path} strokeWidth="2"
        d="M.006 14.328v36.889c0 2.75 2.25 5 5 5h53.988c2.75 0 5-2.25 5-5V14.461L32.099 41.09.006 14.328z"/>
      </svg>
    </div>
  )
}

export default SvgMail;