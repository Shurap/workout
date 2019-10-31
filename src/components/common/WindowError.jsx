import React from 'react';
import styles from './WindowError.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrorFromStore } from '../../redux/actions/actionError';

const WindowError = (props) => {
  
  const handleClick = () => {
    props.clearErrorFromStore();
  }
  
  return (
    <div 
      className={(props.textError) ? styles.windowErrorVisible : styles.windowErrorHide}
      onClick={handleClick}>
      <div className={styles.wrapperText}>
        {(props.textError) ? props.textError.code : ''}
        <br></br>
        <br></br>
        {(props.textError) ? props.textError.message : ''}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  textError: state.error.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearErrorFromStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WindowError);

