import React from 'react';
import styles from './Header.module.css';
import SwitcherLang from './SwitcherLang';
import withTranslator from '../../hocs/withTranslator/withTranslator';

const Header = () => {

  return (
    <div className={styles.header}>
      <SwitcherLang />
    </div>
  )
}

export default withTranslator(Header);

// export default Header;