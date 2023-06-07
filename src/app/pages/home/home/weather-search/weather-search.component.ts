import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  @Input()
  searchCity: string;

  @Output()
  selectedCity = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.selectedCity.emit(this.searchCity);
  }
}
