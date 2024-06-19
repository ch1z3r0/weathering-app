import axios from 'axios';

const Api = async (city) => {
	const apiKey = 'e302595bfbc2936594ace1059b82bf4e';
	// const city = 'london';

	// axios
	// 	.get(
	// 		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	// 	)
	// 	.then((response) => {
	// 		// Handle the weather data received in the response
	// 		console.log(response.data);
	// 	})
	// 	.catch((error) => {
	// 		// Handle any errors
	// 		console.log(error);
	// 	});

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
		);
		return response.data;
	} catch (error) {
		// Handle any errors
		throw error;
	}
};

export default Api;
