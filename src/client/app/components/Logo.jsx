import React from 'react';

class Logo extends React.Component {
    render () {
        var data = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='18.5' viewBox='0 0 50 18.5'%3E%3Cpath d='M34 16.1L26.7 0h-5.2l-8.2 18.5H19L24.1 6l2.2 5.2h-3l-1.6 3.9h6.2l1.4 3.3h3.1c1 0 1.8-.8 1.8-1.7-.1-.2-.2-.3-.2-.6zM17.3 3.5L18.8 0H0v4.5h5.8v13.9h5.4V4.6h4.4c.7 0 1.4-.4 1.7-1.1zM40.6 14V.2h-5.4v18.3h11.6c.8 0 1.4-.5 1.7-1l1.5-3.4-9.4-.1z' fill='%23ffffff'/%3E%3C/svg%3E";
        return <img src={data}/>
    }
}

module.exports = Logo;