import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>Hi there from the class!</div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);