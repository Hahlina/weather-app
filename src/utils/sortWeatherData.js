

 export function sortWeatherData(data){
		const listData = [...data.list]
		const dailyWeatherData = listData.reduce((result, data) => {
			const date = new Date(data.dt_txt).toLocaleDateString();
			if (!result[date]) {
				result[date] = [];
			}
			result[date].push(data);
			return result;
		}, {});
		const dailyWeatherArray = Object.values(dailyWeatherData);
		const sortData = dailyWeatherArray.map((dailyData) => {
			const maxTemp = dailyData.reduce((max, data) => {
				return (data.main.temp > max) ? data.main.temp : max;
			}, Number.NEGATIVE_INFINITY);
			const minTemp = dailyData.reduce((min, data)=>{
				return (data.main.temp < min) ? data.main.temp : min
			}, 50)
			const maxTempData = dailyData.find(data => data.main.temp === maxTemp);
			dailyData.maxTemp = maxTemp;
			dailyData.minTemp = minTemp;
			dailyData.icon = maxTempData.weather[0].icon;
			return dailyData;
		});
		return sortData;
	}


