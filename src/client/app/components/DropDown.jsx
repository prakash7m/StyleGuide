import React from 'react';
import Field from './Field.jsx';
import Combobox from 'react-widgets/lib/Combobox';

class DropDown  extends Field {

    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render () {
        var styles = this.getStyles();
        styles.inputStyles.display = "inline-block";
        return <div className="formfield dropdown">
            <span className="fieldlabel" style={styles.labelStyles}>{this.props.fieldLabel}</span>
            <Combobox onChange={this.onChange.bind(this)} ref="combo" style={styles.inputStyles} {...this.props.comboProps}/>
        </div>
    }

    onChange (value) {
        this.setState({
            value: value 
        });
    }

    getValue () {
        return this.state.value;
    }
};

module.exports = DropDown;