import React from 'react';
import TextField from './TextField.jsx';
import DropDown from './DropDown.jsx';
import FormContainer from './FormContainer.jsx';
import Button from './Button.jsx';

class Quote extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            quoteReady: false
        }
    }
    render () {
        var genderData = ['Male', 'Female'];
        var yourQuote = []
        if (this.state.quoteReady) {
            yourQuote.push(<div>
                Your Quote: 1234
            </div>)
        }
        return (
            <div>
                <FormContainer>
                    <div className="fieldset">
                        <table><tbody><tr><td>
                            <TextField fieldLabel="Date of Birth" labelWidth="140" width="400" />
                            <DropDown fieldLabel="Gender" labelWidth="140" comboProps={{data: genderData, defaultValue: "Select an option..."}} width="404"/>
                            <TextField fieldLabel="Annual Income" labelWidth="140" width="400" />
                            <Button style={{float: 'right'}} btnType="style4">Get Quote</Button>
                        </td></tr></tbody></table>
                    </div>
                    {yourQuote}
                    
                </FormContainer>

            </div>
        )
    }
}

module.exports = Quote;