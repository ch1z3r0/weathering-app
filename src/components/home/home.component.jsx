import './home.styles.scss';
import Icon from '../../assets/weather-icon.svg';

const Home = () => {
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

export default Home;
