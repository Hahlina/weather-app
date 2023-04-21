export function validForm(){
	const inputBox = document.querySelector(".inputbox");
	const inpCity = document.querySelector(".inpCity");
	inputBox.classList.add("fail")
	inputBox.querySelector("span").textContent = "City not found"
	inpCity.addEventListener("click", ()=> {
		inputBox.classList.remove("fail")
		inputBox.querySelector("span").textContent = "City name"
	})
}
