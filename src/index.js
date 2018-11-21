import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

class App extends React.Component {
    render() {
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img src={faker.image.avatar()} alt="avatar"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">{faker.name.firstName()}</a>
                        <div className="metadata">
                            <span className="date">Today at 6:04 PM</span>
                        </div>
                        <div className="text">{faker.lorem.sentence(5, 7)}</div>
                    </div>
                </div>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img src={faker.image.avatar()} alt="avatar"/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">{faker.name.firstName()}</a>
                        <div className="metadata">
                            <span className="date">Yesterday at 2:22 AM</span>
                        </div>
                        <div className="text">{faker.lorem.sentence(7, 70)}</div>
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