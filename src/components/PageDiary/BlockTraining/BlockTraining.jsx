import React from 'react';
import styles from './BlockTraining.module.css';
import withTranslator from '../../../hocs/withTranslator/withTranslator';
import ButtonHidePanel from './ButtonHidePanel';
import ListDayOfExercises from './ListDayOfExercises';
import CountPages from './CountPages';

const BlockTraining = () => {
  return (
    <div className={styles.blockTraining}>
      <ButtonHidePanel />
      <div className={styles.wrapperBlock}>
        <CountPages />
        <ListDayOfExercises />
        <CountPages />
      </div>

    </div>
  )
}

export default withTranslator(BlockTraining);