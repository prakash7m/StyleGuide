import React from 'react';
import {Link} from 'react-router';
import Logo from './Logo.jsx';
class Nav extends React.Component {
    render () {
        return (
            <div className="nav">
                <Link to="/"><div className="nav-link brand"><Logo/> Insurance</div></Link>
                <Link to="/styleguide"><div className="nav-link">Style Guide</div></Link>
                <Link to="quote"><div className="nav-link">Get a Quote</div></Link>
            </div>
        )
    }
}

module.exports = Nav;