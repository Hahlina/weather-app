import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { app } from "./config.js";
import {modalForLogin} from "../modals.js";

const auth = getAuth(app);
export const createUser = async (email, password, name) => {
	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		await updateProfile(user, { displayName: name });
		console.log(user);
		localStorage.setItem("user", JSON.stringify(user));
	} catch (error) {
		if(error.code = "auth/missing-password"){
			modalForLogin("Please, enter correct password!").then()
		}
		if(error.code = "auth/email-already-in-use"){
			modalForLogin("Email already in use!").then()
		} else modalForLogin(`${error.code}`).then()
	}
};
