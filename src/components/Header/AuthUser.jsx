import React from 'react';
import styles from './AuthUser.module.scss';
import SvgAuthUserOn from '../common/svg/SvgAuthUserOn';
import SvgAuthUserOff from '../common/svg/SvgAuthUserOff';
import { connect } from "react-redux";

const AuthUser = (props) => {

  return (
    <div className={styles.authUser}>

      {props.authStatus ? <SvgAuthUserOn color='white' /> : <SvgAuthUserOff color='white' />}

      <div className={styles.wrapperText}>
        {props.authStatus ? (props.currentUserName ? props.currentUserName : '...') : '...'}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUserName: state.currentUser.username,
  authStatus: state.authStatus.authStatus
});

export default connect(mapStateToProps)(AuthUser);