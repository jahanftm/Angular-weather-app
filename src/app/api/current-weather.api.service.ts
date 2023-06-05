import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {BaseApiClient} from "./base-api-clinet";
import {HttpClient} from "@angular/common/http";
import {CurrentWeatherResponse} from "./models/current-weather.response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CurrentWeatherApiService extends BaseApiClient {

  constructor(private httpClient: HttpClient) {
    super(httpClient)
  }


  getCurrentWeatherData(city: string,): Observable<CurrentWeatherResponse> {
    return this.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.api.key}`)
  }
}
