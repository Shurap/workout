import React from 'react';
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { Link } from 'react-router-dom';
import withTranslator from '../../hocs/withTranslator/withTranslator';


const HamburgerMenu = (props) => {

  const [visible, setVisible] = useState(false);

  const onClickLink = () => setVisible(false);

  return (
    <div>
      <div className={`${styles.hamburgerMenu} ${(visible) ? styles.fullHamburgerMenu : ''}`}>
        <div
          className={`${styles.button} ${(visible) ? styles.change : ''}`}
          onClick={() => setVisible(!visible)}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <div className={(visible) ? styles.wrapperLinksOn : styles.wrapperLinksOff}>
          <Link
            className={styles.links}
            to='/home'
            onClick={onClickLink}
          >
            {props.dictionary.headerHome}
          </Link>
          <Link
            className={styles.links}
            to='/diary'
            onClick={onClickLink}
          >
            {props.dictionary.headerDiary}
          </Link>
          <Link className={styles.links}
            to='/login'
            onClick={onClickLink}
          >
            {props.dictionary.headerLogin}
          </Link>
          <Link
            className={styles.links}
            to='/account'
            onClick={onClickLink}
          >
            {props.dictionary.headerCreateAccount}
          </Link>
        </div>
      </div>
      <div className={styles.gag}>

      </div>
    </div>
  )
}

export default withTranslator(HamburgerMenu);