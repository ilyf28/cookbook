import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./mainRoutes";

var container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(routes, container);