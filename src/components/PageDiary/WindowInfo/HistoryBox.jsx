import React from 'react';
import { connect } from 'react-redux';
import styles from './HistoryBox.module.scss';
import { getThreeExercisesToWindowInfoFromStore } from '../../../selectors/getDataToWindowInfoFromStore';
import History from './History';

const HistoryBox = (props) => {

  const history = props.threeExercises.map((element, index) => {
    if (element) {
      return (
        <div
          className={styles.history}
          key={index}
        >
          <History
            date={Object.keys(element)[0]}
            data={Object.values(element)[0]}
          />
        </div>
      )
    }
  })

  return (
    <div className={styles.historyBox}>
      {history}
    </div>
  )
}

const mapStateToProps = (state) => ({
  threeExercises: getThreeExercisesToWindowInfoFromStore(state),
});

export default connect(mapStateToProps)(HistoryBox);