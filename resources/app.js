import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';
// import { Router, Route, Link } from 'react-router'
// import Hello from './components/component.jsx';

// main();

// function main() {
//     var container = document.createElement('div');
//     document.body.appendChild(container);
//     ReactDOM.render(<Hello />, container);
// }

var container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(Routes, container);