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
        var error = <span className="error">{this.props.errorMsg}</span>
        return <div className="formfield dropdown">
            <table><tbody><tr><td>
            <span className="fieldlabel" style={styles.labelStyles}>{this.props.fieldLabel}</span>
            </td><td>
            <Combobox onChange={this.onChange.bind(this)} ref="combo" style={styles.inputStyles} {...this.props.comboProps}/>
            <br/>{error}
            </td></tr></tbody></table>
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