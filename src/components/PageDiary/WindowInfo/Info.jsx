import React from 'react';
import HistoryBox from './HistoryBox';
import imgEdit from '../../../images/edit.png';
import styles from './Info.module.scss';
import withImages from '../../../hocs/withImage/withImage';


const Info = (props) => {
  return (
    <div className={styles.window}>
      <div className={styles.wrapperImage}>
        <img className={styles.image} src={props.imageShow[props.imageExercise]} alt="" />
        <img
          className={styles.button}
          src={imgEdit}
          alt=""
          onClick={props.onClickButtonEdit}
        />
      </div>

      <div className={styles.wrapperImageName}>{props.imageExercise}</div>

      <div className={styles.block}>
        <textarea
          className={styles.textareaExercise}
          readOnly
          type='text'
          value={props.nameExercise}
        />
      </div>

      <div className={styles.block}>
        <textarea
          className={styles.textareaNote}
          readOnly
          type='text'
          value={props.noteExercise}
        />
      </div>

      <HistoryBox />
    </div>
  )
}

export default withImages(Info);