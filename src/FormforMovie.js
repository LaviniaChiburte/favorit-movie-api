import React, { Component } from 'react';

export class FormforMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			poster: '',
			comment: ''
		};
		// this.onChange = this.onChange.bind(this);
		// this.submitForm = this.submitForm.bind(this);

		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		};

		const url = 'https://post-a-form.herokuapp.com/api/movies';

		fetch(url, config)
			.then(res => res.json())
			.then(res => {
				console.log(res);
				if (res.error) {
					alert(res.error);
					console.log(res);
				} else {
					alert(`Added movie ${res}!`);
					console.log(res);
				}
			})
			.catch(e => {
				console.error(e);
				alert('Error during movie posting');
			});
	}

	postInfo = e => {};
	render() {
		return (
			<div className="container">
				<form onSubmit={this.postInfo} style={formStyle}>
					<input
						type="text"
						value={this.state.title}
						placeholder="Name of the movie"
						onChange={e => this.setState({ title: e.target.value })}
					/>
					<input
						type="url"
						value={this.state.poster}
						placeholder="poster to the poster"
						onChange={e => this.setState({ poster: e.target.value })}
					/>
					<textarea
						value={this.state.comment}
						placeholder="Comments.."
						onChange={e => this.setState({ comment: e.target.value })}
					></textarea>
					<button type="submit" value="Submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
	width: '60vw'
};

export default FormforMovie;
