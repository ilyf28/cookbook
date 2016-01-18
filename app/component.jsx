require('./component.css');
import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <div className="MyComponent-wrapper">
                    <h1>Hello world</h1>
                </div>
                <ImageClass />
            </div>
        );
    }
}

var ImageClass = React.createClass({
    render: function() {
        return (
            <img src={require('./4.jpg')} />
        );
    }
});