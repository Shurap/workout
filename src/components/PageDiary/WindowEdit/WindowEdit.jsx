import React from 'react';
import styles from './WindowEdit.module.scss';
import { connect } from 'react-redux';
import FormEditRedux from './FormEditRedux';
import { bindActionCreators } from 'redux';

import { changeVisibleWindowEditToStore } from '../../../redux/actions/actionWindowEdit';

const WindowEdit = (props) => {

  const onClose = () => {
    props.changeVisibleWindowEditToStore(false, '')
  }

  return (
    <div
      className={(props.windowVisible) ?
        styles.windowEditVisible :
        styles.windowEditHide}
    >
      <div className={styles.window}>
        <FormEditRedux />
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  windowVisible: state.windowEdit.visible,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVisibleWindowEditToStore,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WindowEdit);