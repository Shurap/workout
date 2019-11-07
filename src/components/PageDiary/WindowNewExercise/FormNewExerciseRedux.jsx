import React, { useCallback } from 'react';
import styles from './FormNewExerciseRedux.module.css';
import { Field, reduxForm } from 'redux-form'
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import RenderTextField from '../../common/forms/RenderTextField';
import RenderSelectField from '../../common/forms/RenderSelectField';
import ImageExercise from './ImageExercise';
import { connect } from 'react-redux';
import { addGroupImageToStore } from '../../../redux/actions/actionWindowNewExercise';
import { bindActionCreators } from 'redux';


const FormNewExercise = (props) => {

  const onChange = (event) => {
    props.addGroupImageToStore(event.target.value);
  }

  return (
    <form className={styles.FormNewExercise} onSubmit={props.handleSubmit}>

      <div className={styles.wrapperBlockInput}>
        <ImageExercise />

        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderSelectField}
            name='group'
            onChange={onChange}
            // validate={[requiredWithText, emailTrueText]}
            // placeholder={props.dictionary.email}
            autoComplete="off"
          >
            <option value="None">{props.dictionary.muscleNone}</option>
            <option value="Abd">{props.dictionary.muscleAbd}</option>
            <option value="Biceps">{props.dictionary.muscleBiceps}</option>
            <option value="Calves">{props.dictionary.muscleCalves}</option>
            <option value="Chest">{props.dictionary.muscleChest}</option>
            <option value="Glutes">{props.dictionary.muscleGlutes}</option>
            <option value="Hamstrings">{props.dictionary.muscleHamstrings}</option>
            <option value="Lats">{props.dictionary.muscleLats}</option>
            <option value="Lowerback">{props.dictionary.muscleLowerback}</option>
            <option value="MiddleBack">{props.dictionary.muscleMiddleBack}</option>
            <option value="Neck">{props.dictionary.muscleNeck}</option>
            <option value="Quads">{props.dictionary.muscleQuads}</option>
            <option value="Shoulders">{props.dictionary.muscleShoulders}</option>
            <option value="Traps">{props.dictionary.muscleTraps}</option>
            <option value="Triceps">{props.dictionary.muscleTriceps}</option>
          </Field>
        </div>

        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='name'
            // validate={[requiredWithText, emailTrueText]}
            placeholder={props.dictionary.email}
            autoComplete="off"
          />
        </div>
      </div>

      <div className={styles.wrapperBlockInput}>
        <div className={styles.wrapperInput}>
          <Field
            className={styles.textInput}
            component="textarea"
            name='notes'
            // validate={[requiredWithText, minLengthwithText]}
            placeholder={props.dictionary.password}
            autoComplete="off"
          />
        </div>
      </div>

      <button className={styles.buttonLogIn}>{props.dictionary.logIn}</button>

    </form>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addGroupImageToStore,
}, dispatch);

const FormNewExerciseRedux = reduxForm({ form: 'FormNewExercise' })(withTranslator(FormNewExercise));

export default connect(null, mapDispatchToProps)(FormNewExerciseRedux);