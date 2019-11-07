import React from 'react';
import styles from './PageDiary.module.css';
import BlockListExercise from './BlockListExercises'
import WindowNewExercise from './WindowNewExercise/WindowNewExercise';

const PageDiary = () => {
  return (
    <div className={styles.pageDiary}>
      <WindowNewExercise />
      <h2>PageDiary</h2>
      <BlockListExercise />
    </div>
  )
}

export default PageDiary;