import React from 'react';
class Button extends React.Component {
    
    render () {
        return <a className={"btn " + this.props.btnType} href="javascript: void(0)">{this.props.children}</a>
    }
};

module.exports = Button;