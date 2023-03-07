import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClimaData } from './clima.interface';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  weather: ClimaData = { description: '', temp: 0, feels_like: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const apiKey = 'ab16d58c30954ee82afd7743f259de93';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.weather.description = data['weather'][0]['description'];
      this.weather.temp = data['main']['temp'];
      this.weather.feels_like = data['main']['feels_like'];
    });
  }
}
