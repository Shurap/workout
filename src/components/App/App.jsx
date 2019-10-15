import React from 'react';
import Router from '../Router';
import Header from '../Header';
import Footer from '../Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;