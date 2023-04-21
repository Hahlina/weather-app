import Swal from "sweetalert2";
import "animate.css"

export const modalForFavoriteCities = (content) =>{
	return  Swal.fire({
		title: "Favorite",
		html: content,
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		},
		confirmButtonText: 'OK',
		background: '#12bcd0',
		confirmButtonColor: '#062e36',
	});
}
export const modalForLogin = (content) =>{
	return  Swal.fire({
		title: content,
		icon: 'error',
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		},
		confirmButtonText: 'Repeat the login',
		background: '#12bcd0',
		confirmButtonColor: '#062e36',
	});
}