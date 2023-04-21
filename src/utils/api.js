`use strict`
import { validForm} from "./validSearchCity.js";
import {Loader} from "../components/Preloader/Preloader.js";

export async function fetchDataWeather(url){
	try {
		Loader(true)
		const response = await fetch(url);
		
		if (!response.ok) {
			validForm();
			Loader(false)
			throw new Error("Response status is not ok");
		}
		
		const dataWeather = await response.json();
		Loader(false)
		return dataWeather;
	} catch (error) {
		console.log("Error", error);
		return null;
	}
}









