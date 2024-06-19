import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/home/home.component.jsx';
import Weather from './components/weather/weather.component.jsx';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='/weather' element={<Weather />} />
			</Routes>
		</div>
	);
};

export default App;
