import { SevenDays } from './SevenDays.js';
import { Hourly } from './Hourly.js';

// fetching all weatherObj data    
export  async function getApiResponse(url,lat, lon){
            const responseServer = await fetch(`${url}lat=${lat}&lon=${lon}&appid=40548cc5b12a46ee9418e263dd707583`);
            const response = responseServer.json();
            //console.log(response);
            return response;
        }
export  function handleDailyBtn(daily){
        //const header = document.querySelector('header');
        const svnDaysBtn = document.querySelector('.sevenDaysBtn');
        svnDaysBtn.addEventListener('click', () => {
            //const dailyWrapper = new SevenDays(header, daily);
            let dailyOn = document.querySelector('.dailyWrapper').innerHTML;
            if (dailyOn == ''){
                const dailyWrapper = new SevenDays(daily);
                dailyWrapper.render();
            }else{
                document.querySelector('.dailyWrapper').innerHTML = '';
            }
            
        })
    }
export  async function handleHourlyBtn(weather){
        //const header = document.querySelector('header');
        const hourlyBtn = document.querySelector('.hourlyBtn');
        console.log(hourlyBtn, weather);
        
        hourlyBtn.addEventListener('click', () => {
            console.log(hourlyBtn);
            let hourlyOn = document.querySelector('.hourlyWrapper').innerHTML;
            if (hourlyOn == ''){
                const hourlyWrapper = new Hourly(weather);
                hourlyWrapper.render();
            }else{
                document.querySelector('.hourlyWrapper').innerHTML = '';
            }
            
        })
    }


export const  toCelsius = temp => Math.floor(temp - 273.15);
export const toFahrenheit = temp => Math.floor(temp * 9/5 - 459.67);

export const getIcon = obj => `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export function timeConverter(timestamp){
        const a = new Date(timestamp * 1000);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
       
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        
        const day = a.getDate();
        const dayWeek = days[a.getDay()];
        
        let hour = a.getHours();
        if(hour<10){
            hour = "0"+hour;
        }
        const min = a.getMinutes();
        
        const timeData =[year, month, day, hour, min,dayWeek]
        return timeData;
    }

export const getDate = obj =>  timeConverter(obj)[1] +" "+ timeConverter(obj)[3]+", "+ timeConverter(obj)[0];

export const getSunRiseSet = obj => [timeConverter(obj.sunrise)[3] +"." + timeConverter(obj.sunrise)[4],
                                   timeConverter(obj.sunset)[3] +"." + timeConverter(obj.sunset)[4]];
    
export const compareTemp = (real, feel) => real < feel ? true : false;