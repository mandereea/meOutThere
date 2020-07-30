import { timeConverter, getIcon, toCelsius, capitalize } from './weatherUtil.js';
import { renderElement } from '../../../utilitary.js'

class Hourly{
    constructor(hourly){
        this.hourly = hourly;
    }
    async render(){
        const hourlyWrapper = document.querySelector('.hourlyWrapper')

        await this.hourly.forEach(hourObj => {
            const hourlyDiv = renderElement('div', 'hourDiv')

            const hour = timeConverter(hourObj.dt)[3];
            const iconSource = getIcon(hourObj);
                
            const celsius = toCelsius(hourObj.temp)
            const celsiusFeel = toCelsius(hourObj.feels_like);
            const sky = capitalize(hourObj.weather[0].description);
                
            hourlyDiv.innerHTML = `<span class="time">${hour}.00</span>
                                            <img src="${iconSource}"class="icon"/>
                                           <span class="hour-temp">${celsius}&deg;C</span>
                                           <span class ="hour-temp">Real feel ${celsiusFeel}&deg;C</span>
                                           <span class="sky">${sky}</span>`
            console.log(hourlyWrapper);
            hourlyWrapper.appendChild(hourlyDiv);
        })
                
                
            
    }
}

export { Hourly }