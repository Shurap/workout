import React from 'react';
import styles from './LogIn.module.css';
import logo from '../../images/logo.png'
// import SvgUser from './SvgUser';
import SvgPassword from './SvgPassword';
import SvgMail from './SvgMail';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { Link } from 'react-router-dom';

const LogIn = (props) => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit');
  }

  return (
    <div className={styles.logIn}>
      <form className={styles.window} onSubmit={onSubmit}>

        <img className={styles.image} src={logo}></img>

        <div className={styles.wrapperInputs}>

          <div className={styles.wrapper}>
            <SvgMail />
            <div className={styles.wrapperInput}>
              <input
                className={styles.textInput}
                name="email"
                // value={email}
                // onChange={this.onChange}
                type="text"
                placeholder={props.dictionary.email}
                autoComplete="off"
              />
              <span className={styles.underEdit}></span>
            </div>
          </div>

          <div className={styles.wrapper}>
            <SvgPassword />
            <div className={styles.wrapperInput}>
              <input
                className={styles.textInput}
                name="password"
                // value={password}
                // onChange={this.onChange}
                type="password"
                placeholder={props.dictionary.password}
                autoComplete="off"
              />
              <span className={styles.underEdit}></span>
            </div>
          </div>

        </div>

        <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

        <div className={styles.wrappedText}>
          {props.dictionary.loginText}
          <Link className={styles.links} to='/account'>{props.dictionary.loginSignUp}</Link>
        </div>

      </form>
    </div >
  )
}

export default withTranslator(LogIn);