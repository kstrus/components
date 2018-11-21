import React from 'react';
import faker from 'faker';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">{this.props.authorName}</a>
                    <div className="metadata">
                        <span className="date">{this.props.date}</span>
                    </div>
                    <div className="text">{this.props.text}</div>
                </div>
            </div>
        )
    }
}

export default Comment;