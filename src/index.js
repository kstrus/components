import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">Terry</a>
                        <div className="metadata">
                            <span className="date">Today at 6:09 PM</span>
                        </div>
                        <div className="text">Nice blog post!</div>
                    </div>
                </div>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">Patti P.</a>
                        <div className="metadata">
                            <span className="date">Yesterday at 2:22 AM</span>
                        </div>
                        <div className="text">This is awesome</div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);