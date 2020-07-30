import { renderElement } from '../../../utilitary.js';
import { timeConverter, getIcon, toCelsius } from './weatherUtil.js';
import { DayDetails } from './DayDetails.js';

class SevenDays {
    constructor(daily) {
        this.daily = daily;
    }
    handleDetails(weather){
        document.querySelector('.dayContainer').innerHTML="";
        const thisDayDetails = new DayDetails(weather);
        thisDayDetails.render();      
    }
    render() {
        const dailyWrapper = document.querySelector('.dailyWrapper');
        //const dailyWrapper = renderElement('div', 'dailyWrapper');
        this.daily.forEach(dayWeather => {
            const dayShortDiv = renderElement('div', 'dayShortDiv');

            const day = timeConverter(dayWeather.dt)[5];
            const iconSource = getIcon(dayWeather);

            const dayMin = toCelsius(dayWeather.temp.min);
            const dayMax = toCelsius(dayWeather.temp.max);
            
            dayShortDiv.innerHTML =    `<p>${day}</p>
                                        <img src="${iconSource}"/>
                                        <p class="daily-temp">
                                            <span style="color:#EC6E4C">${dayMax}&deg;C</span>
                                            <span>${dayMin}&deg;C </span>
                                        </p>
                                        <p><i class="arrow down"></i>
                                        </p>`

            dayShortDiv.addEventListener('click', () =>{
                this.handleDetails(dayWeather)           
            }); 

            dailyWrapper.appendChild(dayShortDiv);
        })
        //this.domEl.appendChild(dailyWrapper);
    }
}

export { SevenDays };