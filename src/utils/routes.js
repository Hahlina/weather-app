import page from "page";
import {refs} from "./refs.js";
import {CreateAccount} from "../pages/Account/CreateAccount/CreateAccount.js";
import {LogIn} from "../pages/Account/Login/LogIn.js";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {RenderProfile} from "../components/Profile/RenderProfile.js";
import {START_URL} from "./constans.js";
import {Home} from "../pages/Home/Home.js";
import {Search} from "../components/Search/Search.js";
import {setSwiperForDetatils, createSwiper} from "./swiper.js";
import {setEventSearch} from "./setEventSearch.js";



const home = () =>{
  Home(START_URL).then()
	refs.search.innerHTML = Search();
	setEventSearch()
	createSwiper()
	setSwiperForDetatils()

}
const createAccount = () =>{
	CreateAccount()
}
const logIn = () =>{
	refs.search.innerHTML = ""
	LogIn()
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
	const isAuth = !!user; //Boolean(user)
	RenderProfile(isAuth, user, auth);
});
page("*", function (ctx, next) {
	refs.container.innerHTML = "";
	next();
});
page("/", home);
page("/create-account", createAccount);
page("/log-in", logIn);

page()