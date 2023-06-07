import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {CurrentWeatherApiService} from "../../../api/current-weather.api.service";
import {currentWeather} from "../../../api/models/current-weather.model";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let currentWeatherApiService: CurrentWeatherApiService;

  const mockWeatherData: currentWeather =
    {
      "coord": {
        "lon": -3.7396,
        "lat": 5.2038
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 28.99,
        "feels_like": 34.08,
        "temp_min": 28.99,
        "temp_max": 28.99,
        "pressure": 1012,
        "humidity": 77,
      },
      "visibility": 10000,
      "wind": {
        "speed": 4.39,
        "deg": 223,
      },
      "clouds": {
        "all": 100
      },
      "dt": 1686069650,
      "sys": {
        "type": 1,
        "id": 1162,
        "country": "CI",
        "sunrise": 1686031284,
        "sunset": 1686075962
      },
      "timezone": 0,
      "id": 2288873,
      "name": "France",
      "cod": 200,
      "weatherDataList": [
        {
          "icon": "wind",
          "value": "4.39km/h",
          "title": "wind speed"
        },
        {
          "icon": "pressure",
          "value": "1012 hpa",
          "title": "pressure"
        },
        {
          "icon": "wet",
          "value": "77%",
          "title": "humidity"
        },
        {
          "icon": "feels-like",
          "value": "34.08",
          "title": "feels-like"
        }
      ]
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      providers: [CurrentWeatherApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    currentWeatherApiService = TestBed.inject(CurrentWeatherApiService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set spinner to true when onGetWeatherData is called', () => {
    component.onGetWeatherData('france');
    expect(component.spinner).toBeTrue();
  });

  it('should set spinner to false when API call is completed', () => {
    spyOn(currentWeatherApiService, 'getCurrentWeatherData').and.returnValue(of(mockWeatherData));
    component.onGetWeatherData('france');
    expect(component.spinner).toBeFalse();
  });

  it('should set weatherData when API call is successful', () => {
    spyOn(currentWeatherApiService, 'getCurrentWeatherData').and.returnValue(of(mockWeatherData));
    component.onGetWeatherData('france');
    expect(component.weatherData).toEqual(mockWeatherData);
  });
});
