import React from 'react';
import { connect } from 'react-redux';
import dictionary from './dictionary';

const withTranslator = (Component) => {

  const WrapperComponent = (props) => {
    return <Component {...props} dictionary={dictionary[props.language]} />
  }

  const mapStateToProps = (state) => ({
    language: state.language.language
  });

  return connect(mapStateToProps)(WrapperComponent);
}

export default withTranslator;
