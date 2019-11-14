import React from 'react';
import styles from './BlockTraining.module.css';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import imgNext from '../../../images/next.png';
import ButtonHidePanel from './ButtonHidePanel';
import ListDayOfExercises from './ListDayOfExercises';

const BlockTraining = () => {
  return (
    <div className={styles.blockTraining}>
      <ButtonHidePanel />
      <div className={styles.wrapperBlock}>
        <ListDayOfExercises />

        {/* <div className={styles.dayOfExercises}>

          <div className={styles.wrapperExercises}>
            <div className={styles.trainingExercise}>
              Exercise
          </div>
            <div className={styles.trainingExercise}>
              Exercise
          </div>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default withTranslator(BlockTraining);