import React from 'react';
import styles from './SwitcherLang.module.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLanguage } from '../../redux/actions/actionLanguage'

const SwitcherLang = (props) => {

  const updateLanguage = (e) => {
    props.changeLanguage(e.target.value);
  }

  return (
      <select onChange={updateLanguage}>
        <option value='en'>english</option>
        <option value='ru'>русский</option>
      </select>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  changeLanguage 
}, dispatch);

export default connect(null, mapDispatchToProps)(SwitcherLang);