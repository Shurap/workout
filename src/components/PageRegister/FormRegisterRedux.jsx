import React, { useCallback } from 'react';
import styles from './FormRegisterRedux.module.css';
import { Field, reduxForm } from 'redux-form'
import SvgPassword from '../common/svg/SvgPassword';
import SvgMail from '../common/svg/SvgMail';
import SvgUser from '../common/svg/SvgUser'
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { required, minLength, emailTrue, maxLength } from '../common/forms/validators'
import RenderTextField from '../common/forms/RenderTextField';

const FormLogIn = (props) => {

  const requiredWithText = useCallback(required(props.dictionary.errorRequired),
    [props.dictionary.errorRequired]);

  const minLengthwithText = useCallback(minLength(props.dictionary.errorminLength),
    [props.dictionary.errorminLength])

  const maxLengthwithText = useCallback(maxLength(props.dictionary.errormaxLength),
    [props.dictionary.errormaxLength])

  const emailTrueText = useCallback(emailTrue(props.dictionary.erroremailTrue),
    [props.dictionary.erroremailTrue])

  return (
    <form className={styles.formLogIn} onSubmit={props.handleSubmit}>
      <div className={styles.wrapperBlockInput}>
        <SvgUser />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='name'
            validate={[requiredWithText, maxLengthwithText]}
            placeholder={props.dictionary.name}
            autoComplete="off"
          />
        </div>
      </div>

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

      <div className={styles.wrapperBlockInput}>
        <SvgPassword />
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='confirm'
            validate={[requiredWithText, minLengthwithText]}
            placeholder={props.dictionary.confirmPassword}
            autoComplete="off"
          />
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.SignUp}</button>

    </form>
  )

}

const FormLogInRedux = reduxForm({ form: 'FormLogIn' })(withTranslator(FormLogIn));

export default FormLogInRedux;