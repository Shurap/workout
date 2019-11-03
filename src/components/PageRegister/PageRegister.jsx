import React from 'react';
import styles from './PageRegister.module.css';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { Link } from 'react-router-dom';
// import FormLogInRedux from './FormLogInRedux';
import SvgBarbell from '../common/svg/SvgBarbell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSignIn } from '../../redux/actions/actionSignIn'
import { withRouter } from 'react-router-dom';

import Spinner from '../common/Spinner';

const PageRegister = (props) => {
  
  // const onSubmit = (data) => {
  //   props.doSignIn(data, props.history);
  // }

  return (
    <div className={styles.logIn}>
      <div className={styles.window}>
        <SvgBarbell />
        <Spinner />
        {/* <FormLogInRedux onSubmit={onSubmit} /> */}
        <div className={styles.wrappedText}>
          {props.dictionary.loginText}
          <Link className={styles.links} to='/account'>{props.dictionary.loginSignUp}</Link>
        </div>
      </div>
    </div >
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doSignIn
}, dispatch);

export default withRouter(withTranslator(connect(null, mapDispatchToProps)(PageRegister)));