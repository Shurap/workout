import React from 'react';
import styles from './Article.module.css';

const Article = (props) => {
  return (
    <div className={styles.article}>
      <div className={styles.wrapperText}>
        <p>{props.text}</p>
      </div>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={props.image}></img>
      </div>
    </div>
  )
}

export default Article;