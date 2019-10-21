import React from 'react';
import styles from './FormLogInRedux.module.css';
import { Field, reduxForm } from 'redux-form'
import SvgPassword from './SvgPassword';
import SvgMail from './SvgMail';
import withTranslator from '../../hocs/withTranslator/withTranslator';

const FormLogIn = (props) => {
  return (
    <form className={styles.formLogIn} onSubmit={props.handleSubmit}>
      <div className={styles.wrapperBlockInput}>
        <SvgMail />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={'input'}
            name={'email'}
            placeholder={props.dictionary.email}
            autoComplete="off"
          />
          <span className={styles.underEdit}></span>
        </div>
      </div>

      <div className={styles.wrapperBlockInput}>
        <SvgPassword />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={'input'}
            name={'password'}
            placeholder={props.dictionary.password}
            autoComplete="off"
          />
          <span className={styles.underEdit}></span>
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

    </form>
  )

}

const FormLogInRedux = reduxForm({ form: 'FormLogIn' })(withTranslator(FormLogIn));

export default FormLogInRedux;