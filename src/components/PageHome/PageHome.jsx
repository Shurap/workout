import React from 'react';
import picturePhones from "../../images/twoPhones.png"
import styles from './PageHome.module.css';

const PageHome = () => {
  return (
    <div>
      <div className={styles.backgroundPicture}></div>
      
      <div className={styles.next}>
        <div className={styles.wrapperImage}>
          <img className={styles.image} src={picturePhones} ></img>
        </div>
      </div>
    </div>
  )
}

export default PageHome;