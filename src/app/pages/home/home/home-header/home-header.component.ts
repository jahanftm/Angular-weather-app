import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrentWeatherApiService} from "../../../../api/current-weather.api.service";
import {CurrentWeatherResponse} from "../../../../api/models/current-weather.response";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

  @Input()
  weatherData?: CurrentWeatherResponse;

  @Input()
  spinner: boolean = false;

  @Input()
  searchCity: string;

  @Output()
  cityName = new EventEmitter<string>();

  onGetCityName(value: string) {
    this.cityName.emit(value);
  }


}
