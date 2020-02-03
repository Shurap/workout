import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import Firebase, { FirebaseContext } from './firebase';

import {firebase} from './firebase/firebase'

ReactDOM.render(
  (
    <Provider store={store}>
      <FirebaseContext.Provider value={firebase}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </Provider>
  ), document.getElementById('root'));