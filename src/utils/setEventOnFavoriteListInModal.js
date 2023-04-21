import {fetchDataWeather} from "./api.js";
import {Home} from "../pages/Home/Home.js";
import {API_KEY, APP_LANGUAGE, BASE_URL} from "./constans.js";


export const setEventOnFavoriteListInModal =  (cityItems, modal) =>{
	cityItems.forEach((city) => {
		city.addEventListener("click", async (e) => {
			const cityName = e.target.textContent.slice(0, -3);
			
			setTimeout(() => {
				modal.close();
			}, 0);
			
			const URL = `${BASE_URL}${cityName}&units=metric&${APP_LANGUAGE}&appid=${API_KEY}`;
			try {
				const data = await fetchDataWeather(URL);
				if (!data) return
				if (data.cod === "200") {
					await Home(URL);
				}
			} catch (error) {
				console.error(error);
			}
		});
	});
}