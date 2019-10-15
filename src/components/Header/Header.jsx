import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SwitcherLang from './SwitcherLang';
import withTranslator from '../../hocs/withTranslator/withTranslator';

const Header = (props) => {

  return (
    <div className={styles.header}>
      <Link className={styles.links} to='/home'>{props.dictionary.headerHome}</Link>
      <Link className={styles.links} to='/diary'>{props.dictionary.headerDiary}</Link>
      <SwitcherLang />
    </div>
  )
}

export default withTranslator(Header);

// export default Header;