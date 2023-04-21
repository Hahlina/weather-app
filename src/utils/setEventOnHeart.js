import {setFavoriteCityToFirebase} from "./firebase/writeDataToFireBase.js";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {deleteFavoriteCity} from "./firebase/deleteDataFromFirebase.js";


export const SetEventOnHeart = async () => {
	const heart = document.querySelector(".heart");
	if (!heart) return;
	const auth = getAuth()
	heart.addEventListener("click", (e) => {
		heart.classList.toggle("active");
		const city = e.target.parentElement.textContent;
		if(heart.classList.contains("active")){
			onAuthStateChanged(auth, (user) => {
				const isAuth = !!user; //Boolean(user)
				if (isAuth) {
					setFavoriteCityToFirebase(user.uid, `${city}`).catch((error) => console.log("-> error", error));
				}
			});
		}else {
			onAuthStateChanged(auth, (user) => {
				const isAuth = !!user; //Boolean(user)
				if (isAuth) {
					deleteFavoriteCity(user.uid, `${city}`).catch((error) => console.log("-> error", error));
				}
			});
		}
	});
};





