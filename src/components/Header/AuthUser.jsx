import React from 'react';
import styles from './AuthUser.module.css';
import SvgAuthUser from '../common/svg/SvgAuthUser';
import { connect } from "react-redux";


const AuthUser = (props) => {



  return (
    <div className={styles.authUser}>
    {props.authStatus ? (props.currentUserName ? <SvgAuthUser color='white' /> : <div className={styles.changerPicture}></div>) : <div className={styles.changerPicture}></div>}
    {/* {props.currentUserName ? <SvgAuthUser color='white' /> : <div className={styles.changerPicture}></div>} */}

      <div className={styles.wrapperText}>
        {/* {props.authStatus ? (<p>{props.currentUserName ? props.currentUserName : 'Username...'}</p>) : null} */}
        {props.authStatus ? (props.currentUserName ? props.currentUserName : '.Username.') : '.Username.'}
        {/* {props.currentUserName ? props.currentUserName : '.Username.'} */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUserName: state.currentUser.username,
  authStatus: state.authStatus.authStatus
});

export default connect(mapStateToProps)(AuthUser);