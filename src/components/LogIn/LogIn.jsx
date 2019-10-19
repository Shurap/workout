import React from 'react';
import styles from './LogIn.module.css';
import logo from '../../images/logo.png'

const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.window}>
        <img className={styles.image} src={logo}></img>

        <div className={styles.wrapperInputs}>
          <input
            className={styles.textInput}
            name="email"
            // value={email}
            // onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            autoComplete="off"
          />
          <span className={styles.underEdit}></span>
          <input
            className={styles.textInput}
            name="password"
            // value={password}
            // onChange={this.onChange}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <span className={styles.underEdit}></span>
        </div>
        <div className={styles.wrappedText}>
          Text
        </div>

      </div>
    </div>
  )
}

export default LogIn;