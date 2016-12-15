import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

import './sass/main.scss';
import 'react-widgets/lib/less/react-widgets.less';

console.log(Route)

import StyleGuide from './pages/StyleGuide.jsx';
import QuotePage from './pages/QuotePage.jsx';
import Nav from './components/Nav.jsx';

class App extends React.Component {
    render () {
        return <StyleGuide/>
    }
}

const AppContainer = (props) => <div><Nav/>{props.children}</div>

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/"  component={AppContainer} >
            <Route path="/styleguide" component={StyleGuide} />
            <Route path="quote" component={QuotePage} />
        </Route>
        
    </Router>
), document.getElementById("app"))