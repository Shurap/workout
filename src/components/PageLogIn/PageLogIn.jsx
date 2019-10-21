import React from 'react';
import styles from './PageLogIn.module.css';
import logo from '../../images/logo.png'
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { Link } from 'react-router-dom';
import FormLogInRedux from './FormLogInRedux';

const LogIn = (props) => {

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className={styles.logIn}>
      <div className={styles.window}>
        <img className={styles.image} src={logo}></img>
        <FormLogInRedux onSubmit={onSubmit} />
        <div className={styles.wrappedText}>
          {props.dictionary.loginText}
          <Link className={styles.links} to='/account'>{props.dictionary.loginSignUp}</Link>
        </div>
      </div>
    </div >
  )
}



export default withTranslator(LogIn);