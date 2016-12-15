import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
    render () {
        return (
            <div className="nav">
                <div className="nav-link brand">TAL Insurance</div>
                <Link to="/styleguide"><div className="nav-link">Style Guide</div></Link>
                <Link to="quote"><div className="nav-link">Get Quote</div></Link>
            </div>
        )
    }
}

module.exports = Nav;