import React from 'react';
import Router from '../Router';
import Header from '../Header';
import Footer from '../Footer';
import WindowError from '../common/WindowError'
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Router />
      <WindowError />
      <Footer />
    </div>
  );
}

export default App;