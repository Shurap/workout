import React, { useCallback } from 'react';
import styles from './FormLogInRedux.module.css';
import { Field, reduxForm } from 'redux-form'
import SvgPassword from '../common/svg/SvgPassword';
import SvgMail from '../common/svg/SvgMail';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { required, minLength, emailTrue } from '../common/forms/validators'
import RenderTextField from '../common/forms/RenderTextField';

const FormLogIn = (props) => {

  const requiredWithText = useCallback(required(props.dictionary.errorRequired),
    [props.dictionary.errorRequired]);

  const minLengthwithText = useCallback(minLength(props.dictionary.errorminLength),
    [props.dictionary.errorminLength])

  const emailTrueText = useCallback(emailTrue(props.dictionary.erroremailTrue),
  [props.dictionary.erroremailTrue])

  return (
    <form className={styles.formLogIn} onSubmit={props.handleSubmit}>
      <div className={styles.wrapperBlockInput}>
        <SvgMail />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='email'
            validate={[requiredWithText, emailTrueText]}
            placeholder={props.dictionary.email}
            autoComplete="off"
          />
        </div>
      </div>

      <div className={styles.wrapperBlockInput}>
        <SvgPassword />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='password'
            validate={[requiredWithText, minLengthwithText]}
            placeholder={props.dictionary.password}
            autoComplete="off"
          />
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

    </form>
  )

}

const FormLogInRedux = reduxForm({ form: 'FormLogIn' })(withTranslator(FormLogIn));

export default FormLogInRedux;