import { useState, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/weather-data.contexts';
import { useNavigate } from 'react-router-dom';

import './home.styles.scss';
import Icon from '../../assets/weather-icon.svg';

const Home = () => {
	const navigate = useNavigate();
	const { city, setCity } = useContext(WeatherDataContext);
	// const { weatherData, fetchWeatherData } = useContext(WeatherDataContext);

	const handleInputChange = (event) => {
		setCity(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setCity(city);
		// console.log(city);
		// await fetchWeatherData(city);
		navigate('/weather');
	};

	return (
		<div>
			<div className='container'>
				<span>React Weather App</span>
				<img src={Icon} alt='Weather Icon' />
				<p>Find weather for your city</p>
				<form onSubmit={handleSubmit}>
					<input
						type='search'
						onChange={handleInputChange}
						placeholder='City'
					/>
					<button type='submit'>Search</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
