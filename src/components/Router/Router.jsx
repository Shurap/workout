import React from 'react';
import { Route } from 'react-router-dom';
import PageHome from '../PageHome';
import PageDiary from '../PageDiary';
import PageLogIn from '../PageLogIn';
import PageRegister from '../PageRegister';
import PageSignOut from '../PageSignOut'

const Router = () => (
  <div>
    <Route exact path='/' component={PageHome} />
    <Route path='/home' component={PageHome} />
    <Route path='/diary' component={PageDiary} />
    <Route path='/login' component={PageLogIn} />
    <Route path='/register' component={PageRegister} />
    <Route path='/signout' component={PageSignOut} />
  </div>

);


export default Router;