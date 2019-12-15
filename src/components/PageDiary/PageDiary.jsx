import React from 'react';
import styles from './PageDiary.module.scss';
import BlockListExercise from './BlockListExercises';
import BlockTraining from './BlockTraining';
import WindowNewExercise from './WindowNewExercise/WindowNewExercise';
import WindowInfo from './WindowInfo/WindowInfo';

const PageDiary = () => {
  return (
    <div className={styles.pageDiary}>
      <WindowNewExercise />
      <WindowInfo />
      <div className={styles.wrapperBlocks}>
        <BlockListExercise />
        <BlockTraining />
      </div>
    </div>
  )
}

export default PageDiary;