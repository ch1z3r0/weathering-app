import Api from '../../api';
import Home from '../home/home.component';

import './weather.styles.scss';
import Icon from '../../assets/weather-icon.svg';

const Weather = () => {
	return (
		<div>
			<div className='container'>
				<span>React Weather App</span>
				<img src={Icon} alt='Weather Icon' />
				<p>Find weather for your city</p>
				<form action=''>
					<input type='search' />
					<button type='submit'>Search</button>
				</form>
			</div>
		</div>
	);
};

export default Weather;
