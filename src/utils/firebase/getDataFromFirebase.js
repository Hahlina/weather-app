import { database } from "./config.js";
import { ref, get } from "firebase/database";

export const getFavoriteCityFromFirebase = async (uid) => {
	try {
		const dataRef = ref(database, `/users/${uid}/favorite/`);
		const snapshot = await get(dataRef);
		if (snapshot.exists()) {
			const data = snapshot.val();
			const city = Object.values(data);
			return city;
		} else {
			console.log("No data available");
			return null;
		}
	} catch (error) {
		console.error(`Error getting data from Firebase: ${error.message}`);
		return null;
	}
};
