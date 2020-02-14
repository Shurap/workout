import React from 'react';
import HistoryBox from './HistoryBox';
import styles from './Info.module.scss';
import withImages from '../../../hocs/withImage/withImage';
import withTranslator from '../../../hocs/withTranslator/withTranslator';

const Info = (props) => {
  return (
    <div className={styles.window}>

      <div className={styles.wrapperText}>
        {props.dictionary.windowInfo}
      </div>

      <div className={styles.block}>
        <textarea
          className={styles.textareaExercise}
          readOnly
          type='text'
          value={props.nameExercise}
        />
      </div>

      <div className={styles.wrapperImage}>
         {/* Why not CurrentImage */}
        <img className={styles.image} src={props.imageShow[props.imageExercise]} alt="" />
      </div>

      <div className={styles.wrapperImageName}>{props.imageExercise}</div>

      <div className={styles.block}>
        <textarea
          className={styles.textareaNote}
          readOnly
          type='text'
          value={props.noteExercise}
        />
      </div>

      <HistoryBox />

      <button
        className={styles.button}
        onClick={props.onClickButtonEdit}
      >
        {props.dictionary.windowInfoEdit}
      </button>

    </div>
  )
}

export default withTranslator(withImages(Info));