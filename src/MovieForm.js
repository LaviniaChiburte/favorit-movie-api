import React, { useState } from 'react';

export default function MovieForm() {
	const [title, setTitle] = useState('');
	const [poster, setPoster] = useState('');
	const [comment, setComment] = useState('');

	function addInfo(e) {
		e.preventDefault();
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(title, poster, comment)
		};
		const url = 'http://post-a-form.herokuapp.com/api/movies';

		fetch(url, config)
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					alert(res.error);
				} else {
					alert(`Added your favorite movie ${res.id}!`);
				}
			})
			.catch(e => {
				console.error(e);
				alert('Error in adding movie!');
			});
	}

	return (
		<div className="container">
			<form onSubmit={addInfo} style={formStyle}>
				<input
					type="text"
					placeholder="Name of the movie"
					onChange={e => setTitle(e.target.value)}
					value={title}
				/>
				<input
					type="url"
					placeholder="poster to the poster"
					onChange={e => setPoster(e.target.value)}
					value={poster}
				/>
				<textarea
					placeholder="Comments.."
					onChange={e => setComment(e.target.value)}
					value={comment}
				></textarea>
				<button type="submit" value="Submit">
					Submit
				</button>
			</form>
		</div>
	);
}

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
	width: '60vw'
};
