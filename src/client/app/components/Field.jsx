import React from 'react';

class Field  extends React.Component {
    getStyles () {
        var labelStyles = {};
        var inputStyles = {};

        var {labelWidth, width} = this.props;
        
        if (this.props.labelWidth) {
            labelStyles.width = this.props.labelWidth + "px";
        }

        if (this.props.width) {
            inputStyles.width = this.props.width + "px";
        }

        return {
            labelStyles: labelStyles,
            inputStyles: inputStyles
        }
    }
};

module.exports = Field;