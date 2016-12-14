import React from 'react';
import Field from './Field.jsx';
import Combobox from 'react-widgets/lib/Combobox';

class DropDown  extends Field {
    render () {
        var styles = this.getStyles();
        styles.inputStyles.display = "inline-block";
        return <div className="formfield dropdown">
            <span className="fieldlabel" style={styles.labelStyles}>{this.props.fieldLabel}</span>
            <Combobox style={styles.inputStyles} {...this.props.comboProps}/>
        </div>
    }
};

module.exports = DropDown;