import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import './style/App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:42PM"
					content="Check out my pictures!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00AM"
					content="What a great weekend!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Yesterday at 6:23AM"
					content="Love my family!!!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
