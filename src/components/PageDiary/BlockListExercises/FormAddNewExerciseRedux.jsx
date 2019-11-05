import React from 'react';
import { Field, reduxForm } from 'redux-form';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import styles from './FormAddNewExerciseRedux.module.css';
import RenderTextField from '../../common/forms/RenderTextField';

const FormAddNewExercise = (props) => {

  return (
    <form className={styles.formLogIn} onSubmit={props.handleSubmit}>
      <div className={styles.wrapperBlockInput}>
        {/* <SvgMail /> */}
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='newExercise'
            // validate={[requiredWithText, emailTrueText]}
            placeholder={props.dictionary.email}
            autoComplete="off"
          />
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

    </form>
  )

}

const FormAddNewExerciseRedux = reduxForm({ form: 'FormAddNewExercise' })(withTranslator(FormAddNewExercise));

export default FormAddNewExerciseRedux;