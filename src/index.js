import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'

class App extends React.Component {
    render() {
        return (
            <div className="ui container comments">
                <Comment authorName="Sam" date="Today at 6:09 PM" text="Nice blog post!"/>
                <Comment authorName="Martha" date="November 12th at 5:45 PM" text="Great job"/>
                <Comment authorName="Ann" date="November 5th at 11:43 AM" text="This is awesome!!"/>
                <Comment authorName="KD" date="May 14th at 8:57 AM" text="Love it"/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
