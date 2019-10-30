import React from 'react';
import styles from './PageLogIn.module.css';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import { Link } from 'react-router-dom';
import FormLogInRedux from './FormLogInRedux';
import SvgBarbell from '../common/svg/SvgBarbell';
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSignIn } from '../../redux/actions/actionSignIn'

const LogIn = (props) => {

  const onSubmit = (data) => {
    console.log('1');
    props.doSignIn(data);
    


    // console.log(data);
    // props.firebase.doSignInWithEmailAndPassword(data.email, data.password)
    // .then (
    //   props.firebase.auth.onAuthStateChanged((authUser) => {
    //     console.log(authUser);
    //   })
    // );
  }

  return (
    <div className={styles.logIn}>
      <div className={styles.window}>
        <SvgBarbell />
        <FormLogInRedux onSubmit={onSubmit} />
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

export default withFirebase(withTranslator(connect(null, mapDispatchToProps)(LogIn)));