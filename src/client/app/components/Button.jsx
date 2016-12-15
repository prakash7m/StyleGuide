import React from 'react';
class Button extends React.Component {
    
    render () {
        var right = this.props.right;
        return <div style={{width: right + "px"}}>
            <a className={"btn " + this.props.btnType} style={this.props.style} href="javascript: void(0)">{this.props.children}</a>
        </div>
    }
};

module.exports = Button;