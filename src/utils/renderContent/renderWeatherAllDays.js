import moment from "moment/moment.js";

export function renderItemWeather(data) {
	const weatherItem = document.querySelector(".swiper-wrapper");
	weatherItem.innerHTML = ""
	data.forEach((item) => {
		weatherItem.innerHTML += `
		<div class="swiper-slide-1 swiper-slide">
          <p class="degrees">${~~(item.maxTemp)} °C / <span>${~~(item.minTemp)} °C</span></p>
          <img src= "http://openweathermap.org/img/wn/${item.icon}@2x.png" alt="iconWeather">
          <p class="day">${moment(item[0].dt_txt).format("ddd")}</p>
      </div>
		`
	})
}