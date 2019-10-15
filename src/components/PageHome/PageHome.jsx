import React from 'react';
import Article from './Article';
import picturePhones from '../../images/twoPhones.png';
import pictureMuscle from '../../images/muscleman.jpg';
import pictureTest from '../../images/SWLwebsite.png';
import styles from './PageHome.module.css';
import withTranslator from '../../hocs/withTranslator/withTranslator';

const PageHome = (props) => {
  return (
    <div>
      <div className={styles.backgroundPicture}>
        <div className={styles.wrapperText}>
          <h2>{props.dictionary.textOnFirstImage}</h2>
          <p>{props.dictionary.smalltextOnFirstImage}</p>
        </div>
      </div>
      <div className={styles.pageContext}>
        <div className={styles.fieldLeft}></div>
        <div className={styles.fieldCenter}>
          <Article image={picturePhones} text={props.dictionary.textOnHomePage} />
          <Article image={pictureMuscle} text={props.dictionary.text} />
          <Article image={pictureTest} text={props.dictionary.text} />
        </div>
        <div className={styles.fieldRight}></div>
      </div>
    </div>
  )
}

export default withTranslator(PageHome);