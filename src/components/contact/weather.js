import React, { useEffect, useState } from 'react';

export default function Weather() {
	const [weather, setWeather] = useState({});
	const [city] = useState('Oslo');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7552f530894d325c717a2daba6487ca8&units=metric`
		)
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
				setLoading(false);
				console.log('This is local weather data' + data);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [city]);

	return (
		<div className='weather_container'>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					{weather.main && (
						<div className='weather'>
							<h4 className='weather_title'>You should go outside!</h4>
							<h4 className='weather_title'>Weather in {city}:</h4>
							<div className='weather_info'>
								<div className='weather_info_temp'>{weather.main.temp} C</div>
								<div className='weather_info_desc'>
									{weather.weather[0].main}
								</div>
							</div>
						</div>
					)}
					{error && <div className='error'>{error}</div>}
				</div>
			)}
		</div>
	);
}
