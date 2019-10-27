import React, { useCallback } from 'react';
import styles from './FormLogInRedux.module.css';
import { Field, reduxForm } from 'redux-form'
import SvgPassword from '../common/svg/SvgPassword';
import SvgMail from '../common/svg/SvgMail';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { required } from '../common/forms/validators'
import RenderTextField from '../common/forms/RenderTextField';

// const requiredWithText = required('xxxcccxxx');

const FormLogIn = (props) => {

  const requiredWithText = useCallback(() => {
    required('sssssssssssssssssss')
  }, []); 

  console.log('requiredWithText:', requiredWithText);

  return (
    <form className={styles.formLogIn} onSubmit={props.handleSubmit}>
      <div className={styles.wrapperBlockInput}>
        <SvgMail />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='email'
            validate={[requiredWithText]}
            placeholder={props.dictionary.email}
            autoComplete="off"
          />
          {/* <span className={styles.underEdit}></span> */}
        </div>
      </div>

      <div className={styles.wrapperBlockInput}>
        <SvgPassword />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='password'
            validate={[requiredWithText]}
            placeholder={props.dictionary.password}
            autoComplete="off"
          />
          {/* <span className={styles.underEdit}></span> */}
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

    </form>
  )

}

const FormLogInRedux = reduxForm({ form: 'FormLogIn' })(withTranslator(FormLogIn));

export default FormLogInRedux;