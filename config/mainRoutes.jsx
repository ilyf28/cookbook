import React from 'react'
import { Router, Route, Link } from 'react-router'
// import { hashHistory } from 'react-router'

import App from '../app/components/App';
import About from '../app/components/About';
import Inbox from '../app/components/Inbox';

module.exports = (
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
);
