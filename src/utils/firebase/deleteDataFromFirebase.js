import { ref, remove } from "firebase/database";
import { database } from "./config.js";

export const deleteFavoriteCity = async (id, cityName) => {
	try {
		await remove(ref(database, `/users/${id}/favorite/${cityName}`));
		// console.log(`Data with ID ${id} has been deleted successfully.`);
	} catch (error) {
		console.error(`Error deleting data with ID ${id}: `, error);
	}
};
