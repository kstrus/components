import React from 'react';

class Comment extends React.Component {
    render() {
        const { avatar, authorName, date, text} = this.props;

        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">{authorName}</a>
                    <div className="metadata">
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">{text}</div>
                </div>
            </div>
        )
    }
}

export default Comment;