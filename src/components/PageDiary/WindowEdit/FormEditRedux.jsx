import React from 'react';
import styles from './FormEditRedux.module.scss';
import { Field, reduxForm } from 'redux-form'
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import RenderSelectField from '../../common/forms/RenderSelectField';
import CurrentImage from '../../common/CurrentImage';
import { connect } from 'react-redux';
import { changeCurrentImageInStore } from '../../../redux/actions/actionCurrentImage';
import { changeVisibleWindowEditToStore } from '../../../redux/actions/actionWindowEdit';
import { bindActionCreators } from 'redux';
import {
  getImageToWindowEditFromStore,
  getNoteToWindowEditFromStore
} from '../../../selectors/getDataToWindowEditFromStore';

const FormEdit = (props) => {

  const onClose = () => {
    props.changeVisibleWindowEditToStore(false, '')
  }

  const onChange = (event) => {
    props.changeCurrentImageInStore(event.target.value);
  }

  return (
    <div className={styles.window}>
      <form
        className={styles.formEdit}
        onSubmit={props.handleSubmit}
      >

        <div className={styles.wrapperText}>
          Edit exercise
        </div>

        <Field
          className={styles.textareaExercise}
          component="input"
          type='text'
          name='name'
          value={props.nameExercise}
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
          autoComplete="off"
        />

        <button className={styles.button}>Save</button>

      </form>

      <button
        className={styles.button}
        onClick={onClose}
      >
        Cancel
      </button>

    </div>
  )
}

const mapStateToProps = (state) => ({
  initialValues: {
    name: state.windowEdit.exercise,
    group: getImageToWindowEditFromStore(state),
    notes: getNoteToWindowEditFromStore(state),
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeCurrentImageInStore,
  changeVisibleWindowEditToStore,
}, dispatch);

const FormEditRedux = reduxForm({ form: 'FormEdit', enableReinitialize: true })(withTranslator(FormEdit));

export default connect(mapStateToProps, mapDispatchToProps)(FormEditRedux);