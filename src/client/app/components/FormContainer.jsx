import React from 'react';

class FormContainer extends React.Component {
    
    render () {
        const props = this.props;
        const ch = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                //labelWidth: child.props.labelWidth || props.labelWidth
            });
        });
        return <div>
            {ch}
        </div>
    }
}
module.exports = FormContainer;