import React, { useState } from 'react';
import getRandomJoke from '../services/axiosServices';
import chuckImage from '../assets/images/chucknorris_logo_coloured_small@2x.png';

//style
import '../styles/chuckStyle.css';

//mmaterials ui
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ThumbDownAlt, ThumbUp } from '@mui/icons-material';

const Chucknorris = () => {
	const [joke, setJoke] = useState(null);
	const [voted, setVoted] = useState(false);
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);

	const obtainJoke = () => {
		getRandomJoke()
			.then((res) => {
				console.log(res);
				setJoke(res.data);
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
			});
		setVoted(false);
	};

	const voteUp = () => {
		setGood(good + 1);
		setVoted(true);
	};

	const voteDown = () => {
		setBad(bad + 1);
		setVoted(true);
	};

	return (
		<div>
			<h1>Get a random Chuck Norris Joke !!</h1>
			<img alt="Chuck Norris" src={chuckImage} style={{ width: '500px', marginBottom: '20px' }} />
			<div>
				<Button variant="contained" color="success" onClick={obtainJoke}>
					New Joke
				</Button>
			</div>
			{joke !== null ? (
				<div>
					<div>
						<p className="joke-style">{joke.value}</p>
					</div>

					<div>
						<IconButton
							aria-label="ThumbUp"
							color="primary"
							disabled={voted}
							size="large"
							onClick={voteUp}
						>
							<ThumbUp />
						</IconButton>
						<span className="joke-style">{good}</span>
						<IconButton
							aria-label="ThumbDownAlt"
							color="secondary"
							disabled={voted}
							size="large"
							onClick={voteDown}
						>
							<ThumbDownAlt />
						</IconButton>
						<span className="joke-style">{bad}</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Chucknorris;
