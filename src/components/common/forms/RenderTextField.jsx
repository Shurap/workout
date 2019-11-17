import React from 'react';
import styles from './RenderTextField.module.css';

const RenderTextField = ({ input, meta, ...props }) => {

  return (
    <div className={styles.renderTextField}>
      <input {...input} {...props} />
      <div className={(meta.touched && meta.error) ? styles.errorVisible : styles.errorHide}>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    </div>
  )
}

export default RenderTextField;