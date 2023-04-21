import page from "page";
import {refs} from "../../../utils/refs.js";
import {createUser} from "../../../utils/firebase/createUser.js";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import {CreateAccountTemplate} from "./CreateAccountTemplate.js";


export const CreateAccount = () => {
	refs.container.innerHTML = CreateAccountTemplate();
	const logInLink = document.querySelector(".log-in-link");
	logInLink.addEventListener("click", () => {
		page.redirect("/log-in");
	});
	
	const formCreateAccount = document.querySelector("#form-create-account");
	const formFields = formCreateAccount.elements;
	
	const sendDataForm = (e) => {
		e.preventDefault();
		const name = formFields["name"].value;
		const email = formFields["email"].value;
		const password = formFields["password"].value;
		
		const data = {
			name,
			email,
			password,
		};
		createUser(data.email, data.password, data.name).then((user) => {
			formCreateAccount.reset();
		});
	};
	formCreateAccount.addEventListener("submit", sendDataForm);
	
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	
	const googleAuthButton = document.querySelector("#google-auth");
	googleAuthButton.addEventListener("click", () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// Успішно залогіновано
				const user = result.user;
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
		} else {
			// Користувач вже зареєстрований, перенаправляємо на сторінку входу
			// console.log("No user is signed in.");
			// page.redirect("/login");
			// TODO
		}
	});
};
