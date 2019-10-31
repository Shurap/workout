import React from 'react';
import './App.css';
import PageHome from '../src/components/PageHome';
import WindowError from '../src/components/common/WindowError'

function App() {
  return (
    <div className="App">
      <PageHome />
      <WindowError />
    </div>
  );
}

export default App;
