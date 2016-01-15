require('./component.css');
import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="MyComponent-wrapper">
                <h1>Hello world</h1>
            </div>
        );
    }
}

// var Hello = React.createClass({
//     render: function() {
//         return (
//             <div className="MyComponent-wrapper">
//                 <h1>Hello world</h1>
//             </div>
//         );
//     }
// });