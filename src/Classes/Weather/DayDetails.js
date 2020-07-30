import {getSunRiseSet, capitalize, toCelsius, compareTemp, getIcon } from './weatherUtil.js';

class DayDetails{
    constructor(day){
        this.day = day;
    }
    async render(){
        const dayDetailsDiv = document.querySelector('.dayContainer');
        
        const rise = getSunRiseSet(this.day)[0];
        const set = getSunRiseSet(this.day)[1];

        const iconSource = getIcon(this.day);
        const description = capitalize(this.day.weather[0].description);

        const celsiusDay = toCelsius(this.day.temp.day);
        const celsiusFeel = toCelsius(this.day.feels_like.day);
        const compareDay = compareTemp(celsiusDay,celsiusFeel);

        const celsiusNight = toCelsius(this.day.temp.night);
        const celsiusNightFeel = toCelsius(this.day.feels_like.night);
        const compareNight = compareTemp(celsiusNight,celsiusNightFeel);

        const rain = this.day.rain ? this.day.rain : "No";
        
        const uvi = this.day.uvi;
        const wind = this.day.wind_speed;

        
        dayDetailsDiv.innerHTML = ` <div class="dayLeft">
                                        <h4 class="rise">Sunrise: ${rise}</h4>
                                        <p class="day-temp">Day temp: ${celsiusDay}&deg;C  <span>Feel:${celsiusFeel}&deg;C</span></p>
                                    </div>
                                    <div class="dayIcon"><img src="${iconSource}"/>
                                         <h3>${description}</h3>
                                         <p>Rain: ${rain} | Wind: ${wind}</p>
                                         <i class="arrow up no-details"></i>
                                    </div>
                                    <div class="dayRight">
                                        <h4 class="set">Sunset: ${set}</h4>
                                        <p class="night-temp">Night temp: ${celsiusNight}&deg;C  <span>Feel:${celsiusNightFeel}&deg;C</span></p>
                                    </div>`
                                   
                                   
                                    
        if(compareDay){
        document.querySelector('.day-temp>span').classList.add('warmer');
        } else{
        document.querySelector('.day-temp>span').classList.add('colder');
        } 

        if(compareNight){
            document.querySelector('.night-temp>span').classList.add('warmer');
        } else{
            document.querySelector('.night-temp>span').classList.add('colder');
        } 
        //fct for closing the day details div
        document.querySelector('.no-details').addEventListener('click',()=>{
            document.querySelector('.dayContainer').innerHTML="";
        })
        
    }
}
export { DayDetails } 