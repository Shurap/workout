import React from 'react';
import styles from './PageSignOut.module.css';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import SvgBarbell from '../common/svg/SvgBarbell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSignOut } from '../../redux/actions/actionSignOut';
import { withRouter } from 'react-router-dom';
import Spinner from '../common/Spinner';

const PageSignOut = (props) => {

  const handleClick = () => {
    props.doSignOut(props.history);
  }

  return (
    <div className={styles.logIn}>
      <div className={styles.window}>
        <SvgBarbell />
        <Spinner />
        <button className={styles.button} onClick={handleClick}>{props.dictionary.SignOut}</button>
      </div>
    </div >
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doSignOut
}, dispatch);

export default withRouter(withTranslator(connect(null, mapDispatchToProps)(PageSignOut)));