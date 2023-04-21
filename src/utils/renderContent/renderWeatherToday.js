import moment from "moment";
import {setCurrentTime} from "../setCurrentTime.js";

const DATE_FORMAT = "ll";
export const TIME_FORMAT = "ddd, h:mm:ss a";


export function renderWeatherToday (data){
	const weatherTodayElement = document.querySelector(".weatherToday")
	weatherTodayElement.innerHTML = `
	<div class="weatherToday">
        <div class="info">
          <p class="digris">${~~(data.list[0].main.temp)}</p>
          <div class="infoDate">
            <p class="cityName">${data.city.name + " " + data.city.country}<span class="heart"></span></p>
            <p class="dayNow">${moment().format(DATE_FORMAT)}</p>
            <p class="timeNow">${moment().format(TIME_FORMAT)}</p>
          </div>
	     </div>
        <div class="details">
        	 <p class="wind">Wind ${~~(data.list[0].wind.speed)} km/h</p>
	 <p class="humidity">Hum ${data.list[0].main.humidity}%</p>
	 <p class="rain">Rain ${~~((data.list[0].pop)*100)}%</p>
    </div>	`
}
setCurrentTime()