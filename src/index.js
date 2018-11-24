import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment'
import ApprovalCard from './ApprovalCard'

class App extends React.Component {
    render() {
        return (
            <div className="ui container comments">
                <ApprovalCard>Approve all.</ApprovalCard>
                <ApprovalCard>
                    <Comment
                        avatar={faker.image.avatar()}
                        authorName="Sam"
                        date="Today at 6:09 PM"
                        text="Nice blog post!"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        avatar={faker.image.avatar()}
                        authorName="Martha"
                        date="November 12th at 5:45 PM"
                        text="Great job"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        avatar={faker.image.avatar()}
                        authorName="Ann"
                        date="November 5th at 11:43 AM"
                        text="This is awesome!!"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment
                        avatar={faker.image.avatar()}
                        authorName="KD"
                        date="May 14th at 8:57 AM"
                        text="Love it"
                    />
                </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
