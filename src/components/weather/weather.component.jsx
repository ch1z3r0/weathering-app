import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { WeatherDataContext } from '../../contexts/weather-data.contexts';

import './weather.styles.scss';
import Icon from '../../assets/icons/static/cloudy-3-day.svg';

const Weather = () => {
	const { weatherData, fetchWeatherData, city } =
		useContext(WeatherDataContext);

	// useEffect(() => {
	// 	if (city) {
	// 		fetchWeatherData(city);
	// 	}
	// }, [city, fetchWeatherData]);

	fetchWeatherData(city);
	if (weatherData) {
		var { main, weather } = weatherData;
	}

	let sunsetTime, sunriseTime;
	if (weatherData) {
		sunriseTime = new Date(
			(weatherData.sys.sunrise - 25200 + weatherData.timezone) * 1000
		).toLocaleTimeString();
		sunsetTime = new Date(
			(weatherData.sys.sunset - 25200 + weatherData.timezone) * 1000
		).toLocaleTimeString();
		console.log(
			weatherData.sys.sunrise,
			weatherData.sys.sunrise + weatherData.timezone
		);
	}

	return (
		<div>
			<div className='container'>
				<span>React Weather App</span>
				<img src={Icon} alt='Weather Icon' />
				<p>Find weather for your city</p>
				<div>
					{weatherData && (
						<div>
							<span>{main.temp}</span>
							<span>{weather[0].description}</span>
							<span>Sunrise at: {sunriseTime}</span>
							<span>Sunset at: {sunsetTime}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Weather;
