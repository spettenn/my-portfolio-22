// fetch api from openweathermap.org
// and display the weather in the contact page
// only fetch for Oslo
import React, { useState, useEffect } from 'react';

const Weather = () => {
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m`
		)
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
				setLoading(false);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (loading) {
		return <div>loading...</div>;
	}

	return (
		<div className='weather_container'>
			<h3>
				{' '}
				Weather in Oslo: {weather.main.temp} {weather.weather[0].description}{' '}
			</h3>
		</div>
	);
};

export default Weather;
