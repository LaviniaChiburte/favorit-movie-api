import React, { Component } from 'react';

export class FormforMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			poster: '',
			comment: ''
		};
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);

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

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
	}
	render() {
		return (
			<div className="container">
				<form onSubmit={this.submitForm} style={formStyle}>
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						placeholder="Name of the movie"
						id="title"
						name="title"
						onChange={this.onChange}
						value={this.state.title}
					/>
					<label htmlFor="poster">Poster:</label>
					<input
						type="url"
						placeholder="poster to the poster"
						id="poster"
						name="poster"
						onChange={this.onChange}
						value={this.state.poster}
					/>
					<label htmlFor="comment">Comment:</label>
					<textarea
						placeholder="Comments.."
						id="comment"
						name="comment"
						onChange={this.onChange}
						value={this.state.comment}
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
