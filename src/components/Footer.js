
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


function Footer(props) {
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
        <div className='footer-wrapper'>
            {props.data.list.slice(1, 8).map((forecast, index) => (
                <div key={index}>
                    <p>{`${(3 * index) + 3}:00`}</p>
                    <img src={getImage(forecast.weather[0].id)} alt='' />
                    <p>{parseInt(forecast.main.temp)}&deg;C</p>
                </div>
            ))}
        </div>
    );
}

export default Footer;