import React from 'react';
import picture from "../../images/phones.png"
import styles from './PageHome.module.css';

const PageHome = () => {
  console.log(picture);
  return (
    <div>
      <div className={styles.picture}>
      </div>
      <div className={styles.next}>
        <div className={styles.wrapperImage}>
        <img className={styles.image} src={picture} ></img>
        </div>
      </div>
    </div>
  )
}

export default PageHome;