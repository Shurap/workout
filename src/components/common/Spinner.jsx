import React from 'react';
import styles from './Spinner.module.css';
import { connect } from 'react-redux'

const Spinner = (props) => {
  return (
    <div className={(props.loading) ? styles.spinnerVisible : styles.spinnerHide}>
      <div className={styles.pace}></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading
});

export default connect(mapStateToProps)(Spinner);

