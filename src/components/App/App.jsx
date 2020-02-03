import React from 'react';
import Router from '../Router';
import Header from '../Header';
import Footer from '../Footer';
import WindowError from '../common/WindowError';
import Spinner from '../common/Spinner';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Router />
      <Spinner />
      <WindowError />
      <Footer />
    </div>
  );
}

export default App;