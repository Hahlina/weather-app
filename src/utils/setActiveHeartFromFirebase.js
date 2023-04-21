
 export const setActiveHeartFromFirebase =  (cities) =>{
	if(!cities) return
	const cityName = document.querySelector(".cityName");
	if(!cityName) return;
	 cities.forEach((city)=>{
		if(city === cityName.textContent){
			document.querySelector(".heart").classList.add("active")
		}else return
	})
}