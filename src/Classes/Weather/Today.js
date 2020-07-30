import { renderElement } from '../../../utilitary.js';
import { getDate, getIcon, toCelsius, capitalize } from './weatherUtil.js';
import { SevenDays } from './SevenDays.js';

class TodayWeather{
    constructor(domEl, todayData){
        this.domEl = domEl;
        this.todayData = todayData;
    }
    // async handleDailyBtn(daily){
    //     //const header = document.querySelector('header');
    //     const svnDaysBtn = document.querySelector('.sevenDaysBtn');
    //     svnDaysBtn.addEventListener('click', () => {
    //         //const dailyWrapper = new SevenDays(header, daily);
    //         let dailyOn = document.querySelector('.dailyWrapper').innerHTML;
    //         if (dailyOn == ''){
    //             const dailyWrapper = new SevenDays(daily);
    //             dailyWrapper.render();
    //         }else{
    //             document.querySelector('.dailyWrapper').innerHTML = '';
    //         }
            
    //     })
    // }
    async render(){
        const todayContainer = renderElement('div', 'todayContainer');
        this.date = getDate(this.todayData.dt);
        this.iconSrc = getIcon(this.todayData);
    
        this.celsiusReal = toCelsius(this.todayData.temp);
        this.celsiusFeel = toCelsius(this.todayData.feels_like);
        this.description = capitalize(this.todayData.weather[0].description);

        todayContainer.innerHTML = `<div class='weatherImgDiv'>
                                        <img src="${this.iconSrc}"/>
                                        <p class="real">${this.celsiusReal} &deg;C </p>
                                    </div>
                                    <div>
                                        <p> ${this.description} </p>
                                        <p> Real feel: ${this.celsiusFeel} &deg;C</p>
                                    </div>
                                    <div class='weatherBtns'>
                                        <button class='sevenDaysBtn'> 7 Days </button>
                                        <button class='hourlyBtn'> 48 Hours </button>
                                    </div>`

        this.domEl.appendChild(todayContainer);
    }

}

export { TodayWeather }