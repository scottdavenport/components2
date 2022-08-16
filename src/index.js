import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import { faker } from '@faker-js/faker';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:42PM"
				content="Check out my pictures!"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Alex"
				timeAgo="Today at 2:00AM"
				content="What a great weekend!"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 6:23AM"
				content="Love my family!!!"
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
