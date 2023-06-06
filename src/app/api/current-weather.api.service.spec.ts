import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CurrentWeatherApiService} from './current-weather.api.service';
import {CurrentWeatherModelMapping} from "./models/mapping/current-weather.model.mapping";
import {CurrentWeatherResponse} from "./models/current-weather.response";

describe('CurrentWeatherApiService', () => {
  let service: CurrentWeatherApiService;
  let httpMock: HttpTestingController;

  const actualWeatherData: CurrentWeatherResponse =
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
        "temp": 27.99,
        "feels_like": 31.62,
        "temp_min": 27.99,
        "temp_max": 27.99,
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
      "dt": 1686072398,
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
    };

  const expectedWeatherDataExpected = {
    "cache": {
      "france": [
        {
          "icon": "wind",
          "value": "3.28km/h",
          "title": "wind speed"
        },
        {
          "icon": "pressure",
          "value": "1012 hpa",
          "title": "pressure"
        },
        {
          "icon": "wet",
          "value": "80%",
          "title": "humidity"
        },
        {
          "icon": "feels-like",
          "value": "32.07",
          "title": "feels-like"
        }
      ]
    },
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
      "temp": 27.99,
      "feels_like": 32.07,
      "temp_min": 27.99,
      "temp_max": 27.99,
      "pressure": 1012,
      "humidity": 80,
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.28,
      "deg": 204,
    },
    "clouds": {
      "all": 100
    },
    "dt": 1686074031,
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
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrentWeatherApiService],
    });
    service = TestBed.inject(CurrentWeatherApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should return correct CurrentWeatherModelMappingData', () => {
    const actualWeatherDataMapping = new CurrentWeatherModelMapping().deserialize(actualWeatherData);
    expect(actualWeatherDataMapping).toBeTruthy();
  });

  // it('should return current weather data for a given city', () => {
  //   const expectedWeatherDataMapping = new CurrentWeatherModelMapping().deserialize(actualWeatherData);
  //   expect(expectedWeatherDataExpected).toEqual(expectedWeatherDataMapping);
  // });

});
