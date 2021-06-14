import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Login';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        {/* <Route path='/register' exact component={}/> */}
        {/* <Route path='/dashboard' exact component={}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
