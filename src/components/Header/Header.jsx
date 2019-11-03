import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SwitcherLang from './SwitcherLang';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import logo from '../../images/logo.png'
import HamburgerMenu from './HamburgerMenu';
import AuthUser from './AuthUser';

const Header = (props) => {

  return (
    <div className={styles.header}>
      <div className={styles.wrappingContent}>
        <img className={styles.image} src={logo}></img>
        <div className={styles.wrapperLinks}>
          <Link className={styles.links} to='/home'>{props.dictionary.headerHome}</Link>
          <Link className={styles.links} to='/diary'>{props.dictionary.headerDiary}</Link>
          <Link className={styles.links} to='/login'>{props.dictionary.headerLogin}</Link>
          <Link className={styles.links} to='/register'>{props.dictionary.headerCreateAccount}</Link>
        </div>
        <div className={styles.gag}></div>
        <SwitcherLang />
        <AuthUser />
      </div>
      <HamburgerMenu />
    </div>
  )
}

export default withTranslator(Header);