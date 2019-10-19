import React from 'react';
import { Route } from 'react-router-dom';
import PageHome from '../PageHome';
import PageDiary from '../PageDiary';
import LogIn from '../LogIn';

const Router = () => (
  <div>
    <Route exact path='/' component={PageHome} />
    <Route path='/home' component={PageHome} />
    <Route path='/diary' component={PageDiary} />
    <Route path='/login' component={LogIn} />
  </div>

);


export default Router;