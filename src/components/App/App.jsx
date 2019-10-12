import React from 'react';
import Router from '../Router';
import Header from '../Header';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Router />
    </div>
  );
}

export default App;