import React from 'react';
import styles from './WindowEdit.module.scss';
import { connect } from 'react-redux';
import FormEditRedux from './FormEditRedux';

const WindowEdit = (props) => {
  return (
    <div
      className={(props.windowVisible) ?
        styles.windowEditVisible :
        styles.windowEditHide}
    >
      <div className={styles.window}>
        <FormEditRedux />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowEdit.visible,
});

export default connect(mapStateToProps)(WindowEdit);