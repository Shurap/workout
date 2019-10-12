import React from 'react';
import { Route } from 'react-router-dom';
import PageHome from '../PageHome';
import PageDiary from '../PageDiary';

const Router = () => (
  <div>
    <Route exact path='/' component={PageHome} />
    <Route path='/home' component={PageHome} />
    <Route path='/diary' component={PageDiary} />
  </div>

);


export default Router;