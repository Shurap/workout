import React from 'react';
import styles from './Footer.module.css';
import mail from '../../images/mail.png'
import linked from '../../images/linked_in.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapperMail}>
        <div className={styles.wrapperImageMail}>
          <img className={styles.imageMail} src={mail}></img>
        </div>
        <div className={styles.wrapperTextMail}>
          2621754@mail.ru
        </div>
      </div>

      <div className={styles.wrapperLinked}>
        <div className={styles.wrapperImageLinked}>
          <img className={styles.imageLinked} src={linked}></img>
        </div>
        <div className={styles.wrapperTextLinked}>
          linkedin.com/in/aliaksandr-bahaslauchyk-649b83174
        </div>
      </div>

    </div>
  )
}

export default Footer;