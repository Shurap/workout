import React from 'react';
import styles from './Search.module.css';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSearchLabelToStore, addSelectLabelToStore } from '../../../redux/actions/actionSearch';
import imgClear from '../../../images/clear.png';

const Search = (props) => {

  const onChangeSearch = (e) => {
    props.addSearchLabelToStore(e.target.value);
  }

  const onChangeSelect = (e) => {
    props.addSelectLabelToStore(e.target.value);
  }

  const onClickButton = () => {
    props.addSearchLabelToStore('');
    props.addSelectLabelToStore('All group');
  }

  return (
    <div className={styles.search}>
      <div className={styles.wrapperSearch}>
        <div className={styles.wrapperEdits}>
          <input
            className={styles.textInput}
            type='text'
            onChange={onChangeSearch}
            value={props.searchLabel}
            placeholder={props.dictionary.blockExercisesSearch}
            autoComplete="off"
          />

          <select
            className={styles.select}
            onChange={onChangeSelect}
            value={props.selectLabel}
          >
            <option value="All group">{props.dictionary.muscleAllGroup}</option>
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
          </select>
        </div>
        <div>
          <div className={styles.buttonDiv} onClick={onClickButton}>
            {props.dictionary.buttonClear}
            <img src={imgClear} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchLabel: state.search.searchLabel,
  selectLabel: state.search.selectLabel
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addSearchLabelToStore,
  addSelectLabelToStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(Search));
