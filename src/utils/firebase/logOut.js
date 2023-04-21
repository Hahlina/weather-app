import page from "page";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const logOut = (auth) => {
	signOut(auth)
		.then(() => {
			// console.log("User signed out successfully.");
			localStorage.clear();
			page.redirect("/login");
		})
		.catch((error) => {
			console.error(error);
		});
};
