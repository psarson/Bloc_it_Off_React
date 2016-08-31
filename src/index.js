import React from 'react';
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App'; 
import About from './pages/About'; 
import Completed from './pages/Completed';
import Expired from './pages/Expired'; 
import Home from './pages/Home';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}> 
        <IndexRoute component={Home} />       
        <Route path="about" component={About} /> 
        <Route path="completed(/:completed)" name="completed" component={Completed} /> 
        <Route path="expired(/:expired)" name="expired" component={Expired} />
    </Route>
  </Router>    
) ,document.getElementById('root'));
