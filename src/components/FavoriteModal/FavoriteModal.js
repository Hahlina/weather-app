import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFavoriteCityFromFirebase } from "../../utils/firebase/getDataFromFirebase.js";
import "./FavoriteModal.scss"
import {modalForFavoriteCities} from "../../utils/modals.js";
import {setEventOnFavoriteListInModal} from "../../utils/setEventOnFavoriteListInModal.js";
export const FavoriteModal = () => {
	const auth = getAuth();
	const handleAuthStateChanged = (user) => {
		if (user) {
			getFavoriteCityFromFirebase(user.uid).then((city) => {
				if(!city){
					modalForFavoriteCities("You have no favorite cities").then()
					return
				}
				const citiesList = document.createElement("ul");
				citiesList.classList.add("citiesList");
				city.forEach((city) => {
					citiesList.innerHTML += `
            <li class="cityItem">${city}</li>
          `;
				});
				
				const modalFavorite = modalForFavoriteCities(citiesList)
				
				const cityItems = document.querySelectorAll(".cityItem");
				if(!cityItems) return;
				setEventOnFavoriteListInModal(cityItems, modalFavorite)
				
			});
		} else {
			console.log("User is null");
		}
	};
	
	onAuthStateChanged(auth, handleAuthStateChanged);
};
