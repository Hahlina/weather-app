import page from "page";
import "../Account.scss";
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import {refs} from "../../../utils/refs.js";
import {loginTemplate} from "./LoginTamplate.js";
import {modalForLogin} from "../../../utils/modals.js";


export const LogIn = () => {
	refs.container.innerHTML = loginTemplate();
	const singUpLink = document.querySelector(".sing-up-link");
	singUpLink.addEventListener("click", () => {
		page.redirect("/create-account");
	});
	
	const formLogIn = document.querySelector("#form-login");
	const formField = formLogIn.elements;

	const sendDataForm = (e) => {
		e.preventDefault();
		const email = formField["email"].value;
		const password = formField["password"].value;
		
		if (email && password) {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Успішно залогіновано
					const user = userCredential.user;
					// console.log("Logged in successfully", user);
					page("/");
				})
				.catch((error) => {
					const errorCode = error.code;
					if(errorCode === "auth/user-not-found" ){
						modalForLogin("User not found").then()
					}else if(errorCode === "auth/wrong-password"){
						modalForLogin("Wrong password").then()
					}
					const errorMessage = error.message;
					console.error(errorMessage);
				});
		}
	};
	
	formLogIn.addEventListener("submit", sendDataForm);
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	
	const googleAuthButton = document.querySelector("#google-auth");
	googleAuthButton.addEventListener("click", () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// Успішно залогіновано
				const user = result.user;
				// console.log("Logged in successfully", user);
				page("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(errorMessage);
			});
	});
	
	onAuthStateChanged(auth, (user) => {
		if (user) {
			page.redirect("/");
		}
	});
};
