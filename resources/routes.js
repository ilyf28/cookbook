import React from 'react';
import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router'

import Page1 from './page1.js';
import Home from './home';

const routes = 
<Router history={hashHistory}>
    <Route path="/" component={Home}>
        <Route path="/page1" component={Page1} />
    </Route>
</Router>

export default routes;
