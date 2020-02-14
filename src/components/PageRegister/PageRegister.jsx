import React from 'react';
import styles from './PageRegister.module.scss';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import FormRegisterRedux from './FormRegisterRedux';
import SvgBarbell from '../common/svg/SvgBarbell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doRegister } from '../../redux/actions/actionRegister';
import { withRouter } from 'react-router-dom';

const PageRegister = (props) => {

  const onSubmit = (data) => {
    props.doRegister(data, props.history);
  }

  return (
    <div className={styles.pageRegister}>
      <div className={styles.window}>
        <SvgBarbell />
        <div className={styles.gag}></div>
        <FormRegisterRedux onSubmit={onSubmit} />
      </div>
    </div >
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doRegister
}, dispatch);

export default withRouter(withTranslator(connect(null, mapDispatchToProps)(PageRegister)));