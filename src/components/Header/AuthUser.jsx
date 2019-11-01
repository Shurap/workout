import React from 'react';
import styles from './AuthUser.module.css';
import SvgUser from '../common/svg/SvgUser';


const AuthUser = (props) => {

  return (
    <div className={styles.authUser}>
      <SvgUser />
    </div>
  )
}

export default AuthUser;