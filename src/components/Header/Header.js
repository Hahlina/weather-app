import {refs} from "../../utils/refs.js";

export const Header = () =>{
	return`
<a href="/"><div class="logo"></div></a>

  <div class="menu_login"></div>
	`;
}
refs.header.innerHTML = Header();