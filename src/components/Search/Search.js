
import "./Search.scss"
export const Search = () =>{
return`
    <form novalidate>
      <label>
        <div class="inputbox">
          <input required="required" type="text" name="inpCity" id="inpCity" class="inpCity" >
          <span>City name</span>
          <i></i>
        </div>
       <img class="searchIcon" src="/" alt="search">
      </label>
    </form>
`
}