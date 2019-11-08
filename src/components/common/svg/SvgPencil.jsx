import React from 'react';
import styles from './Svg.module.css';

const SvgPencil = () => {
  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 40 40" height="40px" width="40px">
        <path className={styles.path} strokeWidth="1"
        d="M24.867 6.738l8.137 8.137L12.41 35.469l-8.129-8.137zm14.309-1.96l-3.63-3.63a3.595 3.595 0 00-5.081 0l-3.477 3.477 8.133 8.133 4.055-4.051a2.77 2.77 0 000-3.93zM.023 38.765a.925.925 0 001.122 1.101l9.062-2.195-8.129-8.137zm0 0"/>
      </svg>
    </div>
  )
}

export default SvgPencil;