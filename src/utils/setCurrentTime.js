import moment from "moment/moment.js";
import {TIME_FORMAT} from "./renderContent/renderWeatherToday.js";

export const setCurrentTime = () =>{
	setInterval(()=>{
		const timeNow = document.querySelector(".timeNow")
		if(!timeNow) return
		timeNow.textContent = moment().format(TIME_FORMAT)
	})
}