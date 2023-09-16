import Search from "./components/Search";
import Body from "./components/Body"
import Footer from "./components/Footer"
import "./App.css";
import { useState } from "react";


function App() {
  const [weatherData, setWeatherData] = useState()
    const [loading, setLoading] = useState(false);
    const searchForWeather = (searchInput) => {
      setLoading(true);
    const api=`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&cnt=8&units=metric&appid=a1f8856e65db5836315348ad6f01cc41`


    fetch(api)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Please Enter a valid city name");
      }
      return res.json();
    })
    .then((data) => {
      console.log({ data });
      setWeatherData(data);
      setLoading(false);
    })
    .catch((err) => {
      alert(err);
      setLoading(false);
    });
    }

  return (
    <div className="App">
 <Search searchForWeather={searchForWeather} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {weatherData && <Body data={weatherData} />}
          {weatherData && <Footer data={weatherData} />}
        </>
      )}
    </div>
  )
}


export default App;
