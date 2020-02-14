import React from 'react';
import styles from './SvgAuthUserOff.module.css';

const SvgAuthUserOff = (props) => {

  const stylesStroke = {
    stroke: props.color
  }

  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} style={stylesStroke} x="0px" y="0px" viewBox="0 0 60 60" height="80px" width="80px">
        <path className={styles.path} strokeWidth="2"
        d="M23.2 6c-4 2.4-5.2 5.5-5 12.3.1 3.7.9 6.6 3 10 4.6 7.7 4 9.2-4.9 12.1C10.8 42.2 6 46.7 6 50.1c0 1.8.8 1.9 11.4 1.9h11.4l-.5-4.4c-.7-5.5 2.3-12.5 6.7-15.7 4.5-3.3 6.6-7.6 6.8-13.4.3-6.7-1.1-9.6-5.8-12.3-4.8-2.7-8.5-2.8-12.8-.2z"/>
        <path className={styles.path1} strokeWidth="1.5"
        d="M39.2 34c-9.4 5.7-9.4 18.3 0 24 4.1 2.5 8.2 2.5 12.7.2 4.7-2.3 7.2-6.1 7.8-11.3C60.8 36.1 48.5 28.4 39.2 34zm5 7.7c1.7 1.5 1.9 1.5 3.8-.2 1.6-1.4 2.3-1.6 3.2-.7s.7 1.6-.7 3.2c-1.8 1.9-1.8 2.1 0 4 1.4 1.6 1.6 2.3.7 3.2s-1.6.7-3.2-.7c-1.9-1.8-2.1-1.8-4 0-1.6 1.4-2.3 1.6-3.2.7s-.7-1.6.7-3.2c1.7-1.9 1.7-2.1.1-3.9-1-1.1-1.5-2.5-1.1-3 .9-1.5 1.5-1.4 3.7.6z"/>
      </svg>
    </div>
  )
}

export default SvgAuthUserOff;