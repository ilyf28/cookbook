import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router'
// import { DefaultRoute, RouteHandler, Router, Route, Link } from 'react-router';
import Page1 from './page1.js';
import Home from './home';
// import { IndexRoute } from 'react-router';

// let routes = 
// <Router>
//     <Route path="/" component={Home}>
//         <Route path="/page1" component={Page1} />
//     </Route>
// </Router>

// export default routes;

var container = document.createElement('div');
document.body.appendChild(container);
render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/page1" component={Page1} />
        </Route>
    </Router>
), container)