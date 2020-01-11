import React from 'react';
import styles from './FormEditRedux.module.scss';
import { Field, reduxForm } from 'redux-form'
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import RenderTextField from '../../common/forms/RenderTextField';
import RenderSelectField from '../../common/forms/RenderSelectField';
import CurrentImage from '../../common/CurrentImage';
import { connect } from 'react-redux';
import { addGroupImageToStore } from '../../../redux/actions/actionWindowNewExercise';
import { bindActionCreators } from 'redux';
import SvgPencil from '../../common/svg/SvgPencil';


const FormEdit = (props) => {

  return (
    <form
      className={styles.formEdit}
      onSubmit={props.handleSubmit}
    >

      <div className={styles.wrapperImages}>
        <div className={styles.wrapperImage}>
          <CurrentImage />
        </div>
        <div className={styles.wrapperSvg}>
          <SvgPencil />
        </div>
      </div>

      <div className={styles.wrapperSelect}>
        <Field
          className={styles.select}
          component={RenderSelectField}
          name='group'
          // onChange={onChange}
          // defaultValue="adsafdsf"
          // selectedvalue='No group'
          // validate={[requiredWithText, emailTrueText]}
          // placeholder={props.dictionary.email}
          autoComplete="off"
        >
          <option value="No group">{props.dictionary.muscleNone}</option>
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


      {/* <div className={styles.wrapperBlockInput}> */}

        <div className={styles.textareaExercise}>
          <Field
            className={styles.textInput}
            component={RenderTextField}
            name='name'
            // validate={[requiredWithText, emailTrueText]}
            placeholder={props.dictionary.windowNewExerciseEdit}
            autoComplete="off"
          />
        </div>
      {/* </div> */}

      {/* <div className={styles.wrapperBlockInput}> */}
        {/* <div className={styles.textareaNote}> */}
          <Field
            className={styles.textareaNote}
            component="textarea"
            name='notes'
            // validate={[requiredWithText, minLengthwithText]}
            placeholder={props.dictionary.windowNewExerciseArea}
            autoComplete="off"
          />
        {/* </div> */}
      {/* </div> */}

      <button className={styles.button}>{props.dictionary.windowNewExerciseButtonSave}</button>

    </form>
  )
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   addGroupImageToStore,
// }, dispatch);

const FormEditRedux = reduxForm({ form: 'FormEdit' })(withTranslator(FormEdit));

// export default connect(null, mapDispatchToProps)(FormEditRedux);
export default FormEditRedux;