import React from 'react';
import Field from './Field.jsx';

class TextField  extends Field {
    render () {
        var styles = this.getStyles();
        styles.inputStyles.display = "inline-block";
        
        return <div className="formfield textfield">
            <span className="fieldlabel" style={styles.labelStyles}>{this.props.fieldLabel}</span>
            <div style={styles.inputStyles}>
                <input type="text" style={{width: '100%'}}/>
            </div>
            
        </div>
    }
};

module.exports = TextField;