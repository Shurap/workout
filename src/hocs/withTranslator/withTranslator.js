import React from 'react';
import { connect } from 'react-redux';
import dictionary from './dictionary';

const withTranslator = (Component) => {
  
  class WrapperComponent extends React.Component {
    render() {
      return <Component {...this.props} dictionary={dictionary[this.props.language]} />
    }
  }

  const mapStateToProps = (state) => ({
    language: state.language.language
  });

  return connect(mapStateToProps)(WrapperComponent);
}

export default withTranslator;



/*
import React from 'react';
// import { connect } from 'react-redux';
// import dictionary from './dictionary';

const withTranslator = (WrappedComponent) => {
  return <WrappedComponent a='2'/>
}

// const mapStateToProps = (state) => {
//   language: state.language.language
// }

// export default connect(mapStateToProps)(withTranslator);

export default withTranslator;
*/