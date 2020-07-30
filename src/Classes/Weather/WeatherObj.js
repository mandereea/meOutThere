import { getApiResponse } from './weatherUtil.js';

class WeatherObj{
    constructor(lat,long){
        this.lat = lat;
        this.long= long;
    }
    async getStructuredObject(){
        const response = await getApiResponse('https://api.openweathermap.org/data/2.5/onecall?', this.lat, this.long);
        //this.timeZone = await response.timezone;
        this.current = await response.current;
        this.hourly = await response.hourly;
        this.daily = await response.daily;
    }
}
export { WeatherObj };