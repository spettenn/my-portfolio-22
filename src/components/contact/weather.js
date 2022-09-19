// fetch api from openweathermap.org
// and display the weather in the contact page
import React, { useState, useEffect } from 'react';

export default function Weather() {
	const [weather, setWeather] = useState({});
	useEffect(() => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m`
		)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
			});
	}, []);
	return (
		<div>
			<h4>Weather in Oslo:</h4>
			<h4>
				{weather.main !== undefined
					? weather.main.temp + '°C'
					: 'Laster inn...'}
			</h4>
		</div>
	);
}
