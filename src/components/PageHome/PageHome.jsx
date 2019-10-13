import React from 'react';
import picturePhones from "../../images/twoPhones.png"
import styles from './PageHome.module.css';
import withTranslator from '../../hocs/withTranslator/withTranslator';

const PageHome = (props) => {
  return (
    <div>
      <div className={styles.backgroundPicture}>

        <div className={styles.wrapperText}>
          <h2>{props.dictionary.textOnFirstImage}</h2>
        </div>

      </div>

      <div className={styles.next}>
        <div className={styles.wrapperImage}>
          <img className={styles.image} src={picturePhones} ></img>
        </div>
      </div>
    </div>
  )
}

export default withTranslator(PageHome);
// export default PageHome;