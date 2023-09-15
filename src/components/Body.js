import Mostlycloudly from "../img/weather-icons/mostlycloudy.svg"
import Clear from "../img/weather-icons/clear.svg";
// import Cloudy from "../img/weather-icons/cloudy.svg";
import Drizzle from "../img/weather-icons/drizzle.svg";
import Fog from "../img/weather-icons/fog.svg";
import Mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import Partlycloudy from "../img/weather-icons/partlycloudy.svg";
import Rain from "../img/weather-icons/rain.svg";
import Storm from "../img/weather-icons/storm.svg";
import Snow from "../img/weather-icons/snow.svg";
// import Unknown from "../img/weather-icons/unknown.svg"


function Body(props) {

    const getImage = (id) => {
       
        if (id < 300) {
            return Storm;
          } else if (id >= 300 && id <= 499) {
            return Drizzle;
          } else if (id >= 500 && id <= 599) {
            return Rain;
          } else if (id >= 600 && id <= 699) {
            return Snow;
          } else if (id >= 700 && id <= 799) {
            return Fog;
          } else if (id === 800) {
            return Clear;
          } else if (id === 801) {
            return Partlycloudy;
          } else if (id > 801 && id <= 805) {
            return Mostlycloudy;
          }
    }

    return (
        <main>
            <img src={getImage(props.data.list[0].weather[0].id)} className='img-body' alt='mostlycloudy icon'/>
            <div>
                <h2>{props.data.list[0].weather[0].description}</h2>
            </div>
            <div className='temp-body'>
            <h1>Temperature <span>{parseInt(props.data.list[1].main.temp_min)}&deg; to {parseInt(props.data.list[1].main.temp_max)}&deg;C</span></h1>
                <div className='humidity-pressure'>
                    <p><strong>Humidity</strong></p>
                    <p>{props.data.list[1].main.humidity}%</p> 
                    <p><strong>Pressure</strong></p>
                    <p>{props.data.list[1].main.pressure}</p>
                </div>
            </div>
        </main>
    )
}

export default Body;