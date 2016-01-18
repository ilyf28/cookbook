import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

main();

function main() {
    var container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Hello />, container);
}