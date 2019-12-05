import React from 'react';
import { connect } from 'react-redux';
import styles from './HistoryBox.module.scss';
// import { bindActionCreators } from 'redux';
// import { changeVisibleWindowInfoToStore } from '../../../redux/actions/actionWindowInfo';
import { getThreeExercisesToWindowInfoFromStore } from '../../../selectors/getDataToWindowInfoFromStore';
import History from './History';

const HistoryBox = (props) => {

  console.log(props.threeExercises)

  const history = props.threeExercises.map((element, index) => {
    if (element) {

console.log(Object.keys(element)[0])
console.log(Object.values(element)[0])

      return (
        <div key={index}>
          <History
            name={Object.keys(element)[0]}
            data={Object.values(element)[0]}
          />
        </div>
      )
    }
  }
  )


  return (
    <div>
      {history}
    </div>
  )
}







const mapStateToProps = (state) => ({
  threeExercises: getThreeExercisesToWindowInfoFromStore(state),
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   changeVisibleWindowInfoToStore
// }, dispatch);

export default connect(mapStateToProps)(HistoryBox);