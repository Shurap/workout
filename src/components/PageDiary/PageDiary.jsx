import React from 'react';
import styles from './PageDiary.module.scss';
import BlockListExercise from './BlockListExercises';
import BlockTraining from './BlockTraining';
import WindowNewExercise from './WindowNewExercise/WindowNewExercise';
import WindowInfo from './WindowInfo/WindowInfo';
import WindowEdit from './WindowEdit/WindowEdit';

const PageDiary = () => {
  return (
    <div className={styles.pageDiary}>
      <WindowNewExercise />
      <WindowInfo />
      <WindowEdit />
      <div className={styles.wrapperBlocks}>
        <BlockListExercise />
        <BlockTraining />
      </div>
    </div>
  )
}

export default PageDiary;