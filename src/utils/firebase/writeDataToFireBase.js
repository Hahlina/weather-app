import { ref, set } from "firebase/database";
import {database} from "./config.js";


export const setFavoriteCityToFirebase = async (uuid = false, data)=>{
	try {
		await set(ref(database, `/users/${uuid}/favorite/${data}`), data);
	} catch (error) {
		console.error(`Failed to write data to the database: ${error.message}`);
	}
}

