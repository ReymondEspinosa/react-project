import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Authenticated, NotAuthenticated } from '../middleware'

// <-- Guest -->
import Login from './guest/Login';
import Registration from './guest/Registration';
import ForgotPassword from './guest/Forgot-Password';

// <-- Auth -->
import Dashboard from './auth/Dashboard';

// <-- Not Found -->
import NotFound from './NotFound';

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          {/* <-- Guest Route's --> */}
          <NotAuthenticated exact path="/" component={Login}/>
          <NotAuthenticated exact path="/register" component={Registration}/> 
          <NotAuthenticated exact path="/forgot-password" component={ForgotPassword}/>

          {/* <-- Auth Route's --> */}
          <Authenticated exact path="/dashboard" component={Dashboard}/>
          
          {/* <-- Not Found --> */}
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
