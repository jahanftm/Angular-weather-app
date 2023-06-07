import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentWeatherApiService} from "../../../api/current-weather.api.service";
import {currentWeather} from "../../../api/models/current-weather.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentDate = new Date();

  spinner: boolean = false;

  searchCity: string = 'france';

  weatherData?: currentWeather;

  subscription: Subscription = new Subscription();

  constructor(private currentWeatherApiService: CurrentWeatherApiService) {
  }

  ngOnInit(): void {
    this.onGetWeatherData(this.searchCity);
  }

  onGetWeatherData(city: string) {
    if (this.spinner) {
      return;
    }
    this.spinner = true;

    this.subscription.add(
      this.currentWeatherApiService.getCurrentWeatherData(city)
        .subscribe(
          {
            next: (data) => {
              this.spinner = false;
              this.weatherData = data;
            },
            error: (e) => {
              this.spinner = false;
              this.weatherData = null;
            }
          }
        )
    )
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
