import React from 'react';
import Article from './Article';
import picturePhones from '../../images/twoPhones.png';
import pictureMuscle from '../../images/muscleman.jpg';
import pictureTest from '../../images/SWLwebsite.png';
import styles from './PageHome.module.scss';
import withTranslator from '../../hocs/withTranslator/withTranslator';

import SvgBarbell from '../common/svg/SvgBarbell'

const PageHome = (props) => {
  return (
    <div className={styles.pageHome}>
      <div className={styles.backgroundPicture}>
        <div className={styles.wrapperBlockSvgText}>
          <div className={styles.wrapperText}>
            <h2 className={styles.text}>{props.dictionary.textOnFirstImage}</h2>
            <p className={styles.text}>{props.dictionary.smalltextOnFirstImage}</p>
          </div>
          <SvgBarbell />
        </div>
      </div>
      <div className={styles.pageContext}>
        <div className={styles.fieldCenter}>
          <Article image={picturePhones} text={props.dictionary.textOnHomePage} caption={props.dictionary.test} order='0' />
          <div className={styles.separator}></div>
          <Article image={pictureMuscle} text={props.dictionary.text} caption={props.dictionary.test} order='1' />
          <div className={styles.separator}></div>
          <Article image={pictureTest} text={props.dictionary.text} caption={props.dictionary.test} order='0' />
        </div>
      </div>
    </div>
  )
}

export default withTranslator(PageHome);