import Swiper from 'swiper/bundle';

export const createSwiper = () =>{
	new Swiper(".swiper-1", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		keyboard: {
			enanled: true,
		},
		slidesPerView: "auto",
	});
	
}

export const setSwiperForDetatils = () =>{
	new Swiper(".swiper-2", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		keyboard: {
			enanled: true,
		},
		slidesPerView: "auto",
	});
	
}