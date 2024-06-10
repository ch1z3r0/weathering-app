import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/home/home.component.jsx';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route index path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
