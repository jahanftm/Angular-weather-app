import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input()
  value!: string;

  @Input()
  icon!: string;

  @Input()
  title!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
