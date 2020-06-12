import { Component, OnInit, Input, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-weather-widget-api',
  templateUrl: './weather-widget-api.component.html',
  styleUrls: ['./weather-widget-api.component.scss']
})
export class WeatherWidgetApiComponent implements OnInit {

  WeatherData:any;
  iconUrl:string;
  windSpeed:string;
  mainDescription:String;
  constructor() { }
   
  ngOnInit() {
    this.WeatherData = {
      main : {},
      
    };
    this.getWeatherData();
    console.log(this.WeatherData);
    console.log(this.iconUrl);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=d5efe1afff6a0986da10f0184c420692')
    .then((response)=>{
      if (response.status !== 200) {
      throw new Error("Not 200 response")
     } else return (response.json());
  }).then(data=>{this.setWeatherData(data)}).catch(error => { error.mainDescription })
  }
    
  getWeatherDataSearch(cityName:string): void{
    let city = cityName;
    console.log(city,"city in request");
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d5efe1afff6a0986da10f0184c420692')
    .then((response)=>{
      if (response.status !== 200) {
      throw new Error("Not 200 response")
     } else return (response.json());
  }).then(data=>{this.setWeatherData(data);console.log(data);}).catch(error => { error })
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.iconUrl = ("http://openweathermap.org/img/w/" + this.WeatherData.weather[0].icon + ".png");
    this.windSpeed = this.WeatherData.wind.speed;
    this.mainDescription = this.WeatherData.weather[0].main;
  }
  
   getInputValue(id:string):string {
    var inputValue = (<HTMLInputElement>document.getElementById(id)).value;
    return inputValue;
  }

}
