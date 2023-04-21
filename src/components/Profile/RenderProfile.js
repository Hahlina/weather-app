import { signOut } from "firebase/auth";
import page from "page";
import "./RenderProfile.scss";
import {FavoriteModal} from "../FavoriteModal/FavoriteModal.js";

export const RenderProfile = (isAuth, user, auth) => {
	const menuLogin = document.querySelector(".menu_login");
	if (!menuLogin) {
		return;
	}
	menuLogin.innerHTML = "";
	const profileLinks = [
		{ text: "Log out", href: "/", authOnly: true },
		{ text: "Favorite", authOnly: true },
		{ text: "Sign in", href: "/log-in", authOnly: false },
	];
	
	const ul = document.createElement("ul");
	ul.classList.add("profile_link_list");
	
	profileLinks.forEach((link) => {
		if (link.authOnly && !isAuth) {
			return;
		}
		if (!link.authOnly && isAuth) {
			return;
		}
		const li = document.createElement("li");
		li.classList.add("profile_link_item");
		li.dataset.href = link.href;
		li.dataset.auth = JSON.stringify(!isAuth);
		li.innerText = link.text;
		li.addEventListener("click", () => {
			if (link.text === "Log out") {
				signOut(auth).catch((e) => console.log(e));
			}
			if(link.text === "Favorite"){
				FavoriteModal()
			}
			page.redirect(link.href);
		});
		
		ul.appendChild(li);
	});
	if (isAuth) {
		const avatar = document.createElement("img");
		avatar.alt = user.displayName;
		avatar.src =  user.photoURL || "/assets/svg/user.svg";
		avatar.classList.add("avatar");
		avatar.addEventListener("click", () => {
			ul.classList.toggle("visible");
		});
		
		menuLogin.appendChild(avatar);
	}
	menuLogin.insertAdjacentElement("afterbegin", ul);
};
