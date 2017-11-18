import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather_data: any;
  cur_weather;
  temp_celcius;
  constructor(private http: Http) {

   // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=f9cec325feeb2416fb8277bf80c71c1e')
    .subscribe(response => {
      
      this.weather_data = response.json();
      this.temp_celcius = this.weather_data["main"]["temp"]
      this.cur_weather = Math.round(this.temp_celcius - 273.15) + "° C";
      
      console.log(this.weather_data);
      
    });
   }

  ngOnInit() {
  }

}
