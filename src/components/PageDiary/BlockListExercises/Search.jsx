import React from 'react';
import styles from './Search.module.css';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSearchLabelToStore } from '../../../redux/actions/actionSearch';


const Search = (props) => {

  const onChange = (e) => {
    props.addSearchLabelToStore(e.target.value);
  }

  return (
    <div className={styles.search}>
      <input
        className={styles.textInput}
        type='text'
        onChange={onChange}
        value={props.searchLabel}
        placeholder={props.dictionary.blockExercisesSearch}
        autoComplete="off"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({ searchLabel: state.searchLabel.searchLabel });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addSearchLabelToStore
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTranslator(Search));
