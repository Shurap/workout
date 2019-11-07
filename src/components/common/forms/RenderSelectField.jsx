import React from 'react';
// import styles from './RenderSelectField.module.css';

const RenderSelectField = ({ input, meta, ...props }) => {

  const onChange = (event) => {
    event.preventDefault();
    console.log('change', event.target.value);
  }
 
  // console.log('select', input)
  // debugger

  return (
    <div /*className={styles.renderTextField}*/>
      <select /*onChange={onChange}*/ {...input} {...props} />
      {/* <div className={(meta.touched && meta.error) ? styles.errorVisible : styles.errorHide}>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div> */}
    </div>
  )
}

export default RenderSelectField;