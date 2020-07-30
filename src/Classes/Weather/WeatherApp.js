import { renderElement } from '../../../utilitary.js';
import { WeatherObj } from './WeatherObj.js';
import { TodayWeather } from './Today.js';
import { DayDetails } from './DayDetails.js';
import { handleDailyBtn, handleHourlyBtn } from './weatherUtil.js';

function WeatherApp() {

    if (!navigator.geolocation) {
        console.log("refused")
    } else {
        //retrieving and using coordinates to get weather data
        navigator.geolocation.getCurrentPosition(success, error);
    }

    //fct for success
    async function success(position) {
        const weather = new WeatherObj(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
        await weather.getStructuredObject();
        
    const weatherWrapper = renderElement('div', 'weatherWrapper');
        const today = new TodayWeather(weatherWrapper, weather.current);
        today.render();
        //today.handleBtns();


        // document.querySelector('.yesArr').addEventListener('click', (event) =>{
        //     const hourly = new Hourly(weather.hourly);
        //     hourly.renderHourly();
        // });
        // document.querySelector('.noArr').addEventListener('click',()=>{
        //     document.querySelector('.hour-forecast').innerHTML = "";
        // })
        document.querySelector('.headerContainer').appendChild(weatherWrapper);
        handleDailyBtn(weather.daily);
        handleHourlyBtn(weather.hourly);
       // const svnDaysBtn = document.querySelector('.sevenDaysBtn');
        //console.log(svnDaysBtn);
    }
    //fct for error
    function error() {
        console.log("error")
    }

}

export { WeatherApp };