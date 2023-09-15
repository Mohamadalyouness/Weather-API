import { useState } from "react";
import "./Search.css";



function Search(props) {
  const [search, setSearch] = useState("")
  const handleChange = (event) => {
  setSearch(event.target.value);
}
    const handleBtnChange=()=>{
      props.searchForWeather(search);
    }  
  return (
    <div>
      <header className="header">
        <input  onChange={handleChange}  className="input" type="search" placeholder="Enter City Name" name="searchField"></input>
        <button onClick={handleBtnChange} className="button" type="submit">FIND WEATHER</button>
      </header>
    </div>
  )
  }

export default Search;
