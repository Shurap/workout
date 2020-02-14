import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import SwitcherLang from './SwitcherLang';
import withTranslator from '../../hocs/withTranslator/withTranslator';
import logo from '../../images/logo.png'
import HamburgerMenu from './HamburgerMenu';
import AuthUser from './AuthUser';

const Header = (props) => {

  return (
    <div className={styles.header}>
      <div className={styles.wrappingContent}>
        <img className={styles.image} src={logo} alt=""></img>
        <AuthUser />
        <div className={styles.wrapperLinks}>
          <Link className={styles.links} to='/home'>{props.dictionary.headerHome}</Link>
          <Link className={styles.links} to='/diary'>{props.dictionary.headerDiary}</Link>
          <Link className={styles.links} to='/login'>{props.dictionary.headerLogin}</Link>
          <Link className={styles.links} to='/register'>{props.dictionary.headerCreateAccount}</Link>
          <Link className={styles.links} to='/signout'>{props.dictionary.headerSignOut}</Link>
        </div>
        <div className={styles.gag}></div>
        <SwitcherLang />
      </div>
      <HamburgerMenu />
    </div>
  )
}

export default withTranslator(Header);