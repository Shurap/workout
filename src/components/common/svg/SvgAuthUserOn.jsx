import React from 'react';
import styles from './SvgAuthUserOn.module.css';

const SvgAuthUserOn = (props) => {

  const stylesStroke = {
    stroke: props.color
  }

  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} style={stylesStroke} x="0px" y="0px" viewBox="0 0 60 60" height="80px" width="80px">
        <path className={styles.path} strokeWidth="2"
        d="M23.2 8c-4 2.4-5.2 5.5-5 12.3.1 3.7.9 6.6 3 10 4.6 7.7 4 9.2-4.9 12.1C10.8 44.2 6 48.7 6 52.1c0 1.8.8 1.9 12 1.9h12l-1-2.6c-2.3-6 .4-15.4 5.4-19 7-4.9 6.9-4.9 7.3-11 .4-7.5-.8-10.4-5.7-13.2-4.8-2.7-8.5-2.8-12.8-.2z"/>
        <path className={styles.path1} strokeWidth="1.5"
        d="M39.2 34c-9.4 5.7-9.4 18.3 0 24 4.1 2.5 8.2 2.5 12.7.2 4.7-2.3 7.2-6.1 7.8-11.3C60.8 36.1 48.5 28.4 39.2 34zm14.5 7.6c.2.5-1.9 3.2-4.7 5.9l-5 4.9-3.2-3.2c-2.5-2.4-3-3.4-2-4.4.9-.9 1.6-.7 3.2.7 2.1 1.9 2.1 1.8 5.8-1.8 3.5-3.6 5.2-4.2 5.9-2.1z"/>
      </svg>
    </div>
  )
}

export default SvgAuthUserOn;