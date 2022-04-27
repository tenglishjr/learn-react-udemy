import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./components/CommentDetail";
import faker from "@faker-js/faker";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo='Today at 5:00PM'
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo='Today at 5:00PM'
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo='Today at 5:00PM'
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);