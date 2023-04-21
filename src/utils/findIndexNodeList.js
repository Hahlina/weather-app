import {renderAllDetailOfDay} from "./renderContent/renderAllDetailOfDay.js";

export function findIndexInNodeList(data){
	const swiperSlides = document.querySelectorAll(".swiper-slide");
	const arrayFromNodeList = Array.from(swiperSlides)
	let index = 0;
	swiperSlides.forEach((slide)=>{
		slide.addEventListener("click", ()=>{
			swiperSlides.forEach((slide)=>{
				slide.classList.remove("active_card")
			})
			slide.classList.add("active_card")
		})

	})
	
	arrayFromNodeList.forEach((item)=>{
		item.addEventListener("click", (e)=>{
			index = arrayFromNodeList.indexOf((item)) > 0 ? arrayFromNodeList.indexOf((item)) : 0
			renderAllDetailOfDay(data, index)
		})
	})
	return index;
}