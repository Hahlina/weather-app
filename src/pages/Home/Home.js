import {HomeTitle} from "./HomeTitle.js";
import {fetchDataWeather} from "../../utils/api.js";
import {renderWeatherToday} from "../../utils/renderContent/renderWeatherToday.js";
import {sortWeatherData} from "../../utils/sortWeatherData.js";
import {renderItemWeather} from "../../utils/renderContent/renderWeatherAllDays.js";
import {renderAllDetailOfDay} from "../../utils/renderContent/renderAllDetailOfDay.js";
import {findIndexInNodeList} from "../../utils/findIndexNodeList.js";
import {refs} from "../../utils/refs.js";
import {setSwiperForDetatils, createSwiper} from "../../utils/swiper.js";
import {SetEventOnHeart} from "../../utils/setEventOnHeart.js";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {RenderProfile} from "../../components/Profile/RenderProfile.js";
import {getFavoriteCityFromFirebase} from "../../utils/firebase/getDataFromFirebase.js";
import {setActiveHeartFromFirebase} from "../../utils/setActiveHeartFromFirebase.js";

export const Home = async (url) =>{
	refs.container.innerHTML = HomeTitle()
	const dataWeather = await fetchDataWeather(url)
	renderWeatherToday(dataWeather);
	const sortWeatherByDay =  sortWeatherData(dataWeather)
	renderItemWeather(sortWeatherByDay)
	renderAllDetailOfDay(sortWeatherByDay, 0 )
	findIndexInNodeList(sortWeatherByDay);
	createSwiper()
	setSwiperForDetatils()
	const auth = getAuth();
	await new Promise((resolve) => {
		onAuthStateChanged(auth, (user) => {
			const isAuth = !!user;
			RenderProfile(isAuth, user, auth);
			if (isAuth) {
				SetEventOnHeart().catch((error) => console.error("->error ",error ));
				getFavoriteCityFromFirebase(user.uid)
					.then((city) => setActiveHeartFromFirebase(city));
			}
			resolve();
		});
	});
}
