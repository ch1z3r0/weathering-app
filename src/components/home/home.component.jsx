import { useState } from 'react';

import './home.styles.scss';
import Icon from '../../assets/weather-icon.svg';

const Home = () => {
	const [city, setCity] = useState('');

	const handleInputChange = (event) => {
		setCity(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(city);
	};

	return (
		<div>
			<div className='container'>
				<span>React Weather App</span>
				<img src={Icon} alt='Weather Icon' />
				<p>Find weather for your city</p>
				<form onSubmit={handleSubmit}>
					<input type='search' onChange={handleInputChange} />
					<button type='submit'>Search</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
