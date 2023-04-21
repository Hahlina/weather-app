import {Home} from "../pages/Home/Home.js";
import {fetchDataWeather} from "./api.js";
import {API_KEY, APP_LANGUAGE, BASE_URL} from "./constans.js";


export const setEventSearch = () => {
	const formSearch = document.querySelector("form");
	const searchIcon = document.querySelector(".searchIcon");
	searchIcon.src = "./search.svg"
	searchIcon.addEventListener("click", (e) => {
		e.preventDefault();
		submit(formSearch).then()
	});
	
	formSearch.addEventListener("submit", async (e) => {
		e.preventDefault();
		submit(formSearch).then()
		
	});
};

async function submit (form){
	const nameCity = document.querySelector("input");
	const inputBox = document.querySelector(".inputbox");
	if (nameCity.value === "") {
		inputBox.classList.add("fail");
		return;
	}
	
	const URL = `${BASE_URL}${nameCity.value}&units=metric&${APP_LANGUAGE}&appid=${API_KEY}`;
	
	form.reset();
	nameCity.blur();
	
	try {
		const data = await fetchDataWeather(URL);
		if (!data) return
		if (data.cod === "200") {
			await Home(URL);
		}
	} catch (error) {
		console.error(error);
	}
}