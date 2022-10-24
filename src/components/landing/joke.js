import { useEffect, useState } from 'react';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
	},
};

fetch(
	'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
	options
)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

export default function Joke() {
	const [joke, setJoke] = useState({});

	useEffect(() => {
		fetch(
			'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
			options
		)
			.then((response) => response.json())
			.then((response) => setJoke(response))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='joke_container'>
			<div className='joke'>{joke.value}</div>
		</div>
	);
}
