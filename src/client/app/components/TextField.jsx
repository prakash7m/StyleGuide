import React from 'react';
import Field from './Field.jsx';

class TextField  extends Field {
    render () {
        var styles = this.getStyles();
        styles.inputStyles.display = "inline-block";
        var error = <span className="error">{this.props.errorMsg}</span>
        return <div className="formfield textfield">
            <table><tbody><tr><td>
            <span className="fieldlabel" style={styles.labelStyles}>{this.props.fieldLabel}</span>
            </td><td>
            <div style={styles.inputStyles}>
                <input ref="inputfield" type="text" style={{width: '100%'}}/>
                <br/>{error}
            </div>
            </td></tr></tbody></table>
            
        </div>
    }

    getValue () {
        return this.refs.inputfield.value;
    }
};

module.exports = TextField;