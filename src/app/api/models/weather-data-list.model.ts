export interface WeatherDataListModel {
  weatherDataList: WeatherDataList[];
  cache?: {[key:string]: WeatherDataList}
}

export interface WeatherDataList {
  icon: string;
  value: string;
  title: string;
}

