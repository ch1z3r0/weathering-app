import { createContext, useContext, useState } from 'react';
import Api from '../api';

export const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
	const [weatherData, setWeatherData] = useState();
	const [city, setCity] = useState('');
	const fetchWeatherData = async (city) => {
		try {
			const data = await Api(city);
			setWeatherData(data);
		} catch (error) {
			console.log(city);
			console.error('Failed to fetch weather data.', error);
		}
	};

	const value = {
		weatherData,
		setWeatherData,
		fetchWeatherData,
		city,
		setCity,
	};

	return (
		<WeatherDataContext.Provider value={value}>
			{children}
		</WeatherDataContext.Provider>
	);
};
