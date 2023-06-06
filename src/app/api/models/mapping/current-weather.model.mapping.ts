import {Clouds, Coord, CurrentWeatherResponse, Main, Sys, Weather, Wind} from "../current-weather.response";
import {currentWeather} from "../current-weather.model";
import {WeatherDataList} from "../weather-data-list.model";

export class CurrentWeatherModelMapping implements currentWeather {

  cache = {};

  base: string;

  clouds: Clouds;

  cod: number;

  coord: Coord;

  dt: number;

  id: number;

  main: Main;

  name: string;

  sys: Sys;

  timezone: number;

  visibility: number;

  weather: Weather[];

  wind: Wind;

  weatherDataList: WeatherDataList[];


  deserialize(data: CurrentWeatherResponse): this {
    Object.assign(this, data);
    this.weatherDataList = this.createWeatherList(data);
    console.log(this)
    return this;
  }

  createWeatherList(data: CurrentWeatherResponse) {

    const cacheKey = data.name.toLowerCase();

    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    const list = [];
    list.push({icon: 'wind', value: `${data.wind.speed}km/h`, title: 'wind speed'});
    list.push({icon: 'pressure', value: `${data.main.pressure} hpa`, title: 'pressure'});
    list.push({icon: 'wet', value: `${data.main.humidity}%`, title: 'humidity'});
    list.push({icon: 'feels-like', value: `${data.main.feels_like}`, title: 'feels-like'});
    this.cache[cacheKey] = list;

    return list;
  }


}


