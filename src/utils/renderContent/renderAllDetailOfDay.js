import moment from "moment/moment.js";

export function renderAllDetailOfDay(data, index){
	const allInfoOfDay = document.querySelector(".allInfoOfDay");
	allInfoOfDay.innerHTML = ""
	const newData = [...data[index]]
	newData.forEach((data)=>{
		allInfoOfDay.innerHTML +=`
		<div class=" swiper-slide-2 swiper-slide">
		<img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="iconWeather">
		<p>${moment(data.dt_txt).format("LT")}</p>
		<p>${~~(data.main.temp)} °C</p>
		<p>${~~((data.pop)*100)}%</p>
		<p>${data.main.humidity}%</p>
		<p>${~~(data.wind.speed)} km/h</p>
		</div>
		`
		
	})
	
}
