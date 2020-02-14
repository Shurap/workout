import React from 'react';
import styles from './FormNewExerciseRedux.module.scss';
import { Field, reduxForm } from 'redux-form'
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import RenderSelectField from '../../common/forms/RenderSelectField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrentImage from '../../common/CurrentImage';
import { changeCurrentImageInStore } from '../../../redux/actions/actionCurrentImage';
import { changeVisibleWindowNewExerciseToStore } from '../../../redux/actions/actionWindowNewExercise';

const FormNewExercise = (props) => {

  const onChange = (event) => {
    props.changeCurrentImageInStore(event.target.value);
  }

  const onClose = () => {
    props.changeVisibleWindowNewExerciseToStore(false);
    props.changeCurrentImageInStore('No group');
    props.reset();
  }

  return (
    <div className={styles.window}>
      <form
        className={styles.formNewExercise}
        onSubmit={props.handleSubmit}
      >

        <div className={styles.wrapperText}>
          {props.dictionary.windowNewExercise}
        </div>

        <Field
          className={styles.textareaExercise}
          component="input"
          type='text'
          name='name'
          placeholder={props.dictionary.windowNewExerciseEdit}
          autoComplete="off"
        />

        <div className={styles.wrapperImage}>
          <CurrentImage />
        </div>

        <div className={styles.wrapperImageName}>
          <Field
            className={styles.select}
            component={RenderSelectField}
            name='group'
            onChange={onChange}
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

        <Field
          className={styles.textareaNote}
          component="textarea"
          name='notes'
          placeholder={props.dictionary.windowNewExerciseArea}
          autoComplete="off"
        />

        <button className={styles.button}>
          {props.dictionary.buttonSave}
        </button>

      </form>

      <button
        className={styles.button}
        onClick={onClose}
      >
        {props.dictionary.buttonCancel}
      </button>

    </div>
  )
}

const mapStateToProps = (state) => ({
  initialValues: {
    group: "No group",
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeCurrentImageInStore,
  changeVisibleWindowNewExerciseToStore,
}, dispatch);

const FormNewExerciseRedux = reduxForm({ form: 'FormNewExercise', enableReinitialize: true })(withTranslator(FormNewExercise));

export default connect(mapStateToProps, mapDispatchToProps)(FormNewExerciseRedux);