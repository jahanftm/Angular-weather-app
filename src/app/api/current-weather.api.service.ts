import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BaseApiClient} from "./base-api-clinet";
import {HttpClient} from "@angular/common/http";
import {CurrentWeatherResponse} from "./models/current-weather.response";
import {map} from "rxjs/operators";
import {CurrentWeatherModelMapping} from "./models/mapping/current-weather.model.mapping";
import {currentWeather} from "./models/current-weather.model";


@Injectable({
  providedIn: 'root'
})

export class CurrentWeatherApiService extends BaseApiClient {

  constructor(private httpClient: HttpClient) {
    super(httpClient)
  }


  getCurrentWeatherData(city: string,): Observable<currentWeather> {
    return this.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0ed5bdf9bdeaf55d8224853725405fd&units=metric`)
      .pipe(
        map((data: CurrentWeatherResponse) => new CurrentWeatherModelMapping().deserialize(data))
      )
  }
}
