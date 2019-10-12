import React from 'react';
import styles from './Header.module.css';
import SwitcherLang from './SwitcherLang';

const Header = () => {

  return (
    <div className={styles.header}>
      <SwitcherLang />
    </div>
  )
}

export default Header;