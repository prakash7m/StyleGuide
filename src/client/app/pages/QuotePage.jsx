import React from 'react';
import Quote from '../components/Quote.jsx';

class QuotePage extends React.Component {
    render () {
        return <div className="page">
            <h1>Get Quote</h1>
            <div className="whitebg"> 
                <Quote/>                
            </div>
        </div>
    }
}

module.exports = QuotePage;