import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/Button.jsx';
import FormContainer from './components/FormContainer.jsx';
import TextField from './components/TextField.jsx';
import DropDown from './components/DropDown.jsx';

import './sass/main.scss';
import 'react-widgets/lib/less/react-widgets.less';

import DropDownList from 'react-widgets/lib/DropDownList';
import Combobox from 'react-widgets/lib/Combobox';

class App extends React.Component {
    render () {
        var genderData = ['Male', 'Female'];
        var buttons = [];
        for (var i=1;i<11;i++) {
            buttons.push(
                <div className="guide" key={i}>
                    <Button btnType={"style" + i}>Button Style {i}</Button>
                    <div className="code">&lt;Button btnType="style{i}">Button Style {i}&lt;/Button></div>
                </div>
            )
        }

        var darkbgButtons = [];
        for (var i=10;i<16;i++) {
            darkbgButtons.push(
                <div className="guide" key={i}>
                    <Button btnType={"style" + i}>Button Style {i}</Button>
                    <div className="code">&lt;Button btnType="style{i}">Button Style {i}&lt;/Button></div>
                </div>
            )
        }

        return <div>
            <h1>Style Guide</h1>
            <div className="whitebg"> 
                {buttons}
            </div>
            <div className="darkbg">
                {darkbgButtons}
            </div>
            <div className="whitebg">
                <FormContainer>
                    <div className="guide">
                        <TextField fieldLabel="Some long label" width="400" labelWidth="140"/>
                        <div className="code">&lt;TextField fieldLabel="Some long label" width="400" labelWidth="140"/></div>
                    </div>
                    <div className="guide">
                        <DropDown fieldLabel="Gender" labelWidth="140" comboProps={{data: genderData, defaultValue: "Select an option..."}} width="400"/>
                        <div className="code">&lt;DropDown fieldLabel="Gender" labelWidth="140" comboProps=&#123;&#123;data: genderData, defaultValue: "Select an option.."&#125;&#125; width="400"/></div>
                    </div>
                </FormContainer>
            </div>
            <div className="whitebg">
                <div className="guide">
                    <h1>H1 title</h1>
                    <div className="code">&lt;h1>H1 title&lt;/h1></div>
                </div>
                <div className="guide">
                    <h2>H2 title</h2>
                    <div className="code">&lt;h2>H2 title&lt;/h2></div>
                </div>
                <div className="guide">
                    <h3>H3 title</h3>
                    <div className="code">&lt;h3>H3 title&lt;/h3></div>
                </div>
                <div className="guide">
                    <h4>H4 title</h4>
                    <div className="code">&lt;h4>H4 title&lt;/h4></div>
                </div>
                <div className="guide">
                    <h5>H5 title</h5>
                    <div className="code">&lt;h5>H5 title&lt;/h5></div>
                </div>
                <div className="guide">
                    <h6>H6 title</h6>
                    <div className="code">&lt;h6>H6 title&lt;/h6></div>
                </div>
            </div>
        </div>
    }
}

ReactDom.render(<App />, document.getElementById("app"))