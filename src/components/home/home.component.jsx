import './home.styles.scss';
import Icon from '../../assets/weather-icon.svg';

const Home = () => {
	return (
		<div>
			<div className='container'>
				<h1>React Weather App</h1>
				<br />
				<img src={Icon} alt='Weather Icon' />
			</div>
		</div>
	);
};

export default Home;
