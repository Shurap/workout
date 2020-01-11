import React from 'react';
import styles from './Edit.module.scss';
import FormEditRedux from './FormEditRedux';

const Edit = (props) => {
  return (
    <div className={styles.window}>
      <FormEditRedux />
    </div>
  )
}

export default Edit;