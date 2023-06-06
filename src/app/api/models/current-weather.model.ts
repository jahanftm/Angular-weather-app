import {CurrentWeatherResponse} from "./current-weather.response";
import {WeatherDataListModel} from "./weather-data-list.model";

export type currentWeather = WeatherDataListModel & CurrentWeatherResponse;
