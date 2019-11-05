import React from 'react';
import styles from './PageDiary.module.css';
import BlockListExercise from './BlockListExercises'

const PageDiary = () => {
  return (
    <div className={styles.pageDiary}>
      <h2>PageDiary</h2>
      <BlockListExercise />
    </div>
  )
}

export default PageDiary;