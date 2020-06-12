import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftWeatherComponent } from './left-weather/left-weather.component';
import { RightWeatherComponent } from './right-weather/right-weather.component';
import { WeatherWidgetApiComponent } from './weather-widget-api/weather-widget-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftWeatherComponent,
    RightWeatherComponent,
    WeatherWidgetApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
