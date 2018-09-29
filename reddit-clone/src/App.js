import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PostList from './PostList';
import './CSS/App.css';

class App extends React.Component {
	state = {
		posts: this.props.data
	}

	vote = (index, isUpvote) => {
		let posts = [...this.state.posts];
		if (isUpvote) {
			posts[index].votes += 1;
		} else {
			posts[index].votes -= 1;
		};
		this.setState({	posts });
	}

	render() {
		return (
			<div className="App">
				<PostList vote={this.vote} posts={this.state.posts}/>
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.array.isRequired
};

export default App;
