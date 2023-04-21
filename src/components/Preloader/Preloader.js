import "./Preloader.scss"
import {refs} from "../../utils/refs.js";

export function Loader(mode) {
	if (mode) {
		const loaderWrapper = document.createElement("div");
		loaderWrapper.classList.add("loader_wrapper");
		const loader = document.createElement("div");
		loader.classList.add("lds-ring");
		loader.innerHTML = "<div></div><div></div><div></div><div></div>";
		loaderWrapper.appendChild(loader);
		refs.container.appendChild(loaderWrapper);
	} else {
		const loaderWrapper = document.querySelector(".loader_wrapper");
		if (loaderWrapper) {
			loaderWrapper.remove();
		}
	}
}