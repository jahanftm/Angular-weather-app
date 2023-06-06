import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './home/weather-card/weather-card.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { WeatherSearchComponent } from './home/weather-search/weather-search.component';
import {UiModule} from "../../ui/ui/ui.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    WeatherCardComponent,
    HomeHeaderComponent,
    WeatherSearchComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        UiModule,
        FormsModule
    ]
})
export class HomeModule { }
