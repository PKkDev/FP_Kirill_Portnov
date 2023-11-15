import { Component, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { LocationDto } from './domain/location';
import { Subscription, finalize } from 'rxjs';
import { WeatherRootDto } from './domain/weather';
import { ImageResultDto } from './domain/image';
import { weatherMap } from './model/weather-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public city: string | undefined = 'Самара';

  private location: LocationDto | null = null;
  public weather: weatherMap | null = null;
  public weatherImage: string | null = null;
  // 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjg2MjV8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzAwMDgyNzAxfDA&ixlib=rb-4.0.3&q=80&w=400'

  private getLocationSubs: Subscription | undefined;
  private getCityWeatherSubs: Subscription | undefined;
  private getWeatherImageSubs: Subscription | undefined;

  public isCityInfoLoading = false;
  public isCityWeatherLoading = false;
  public isWeatherImageLoading = false;

  public errorMsg: string | undefined;

  constructor(private api: ApiService) { }

  ngOnDestroy() {
    this.getLocationSubs?.unsubscribe();
    this.getCityWeatherSubs?.unsubscribe();
    this.getWeatherImageSubs?.unsubscribe();
  }

  public onStart() {
    if (!this.city) return;

    this.ngOnDestroy();

    this.isCityInfoLoading = true;
    this.getLocationSubs = this.api.getLocation(this.city)
      .pipe(finalize(() => this.isCityInfoLoading = false))
      .subscribe({
        next: (next: LocationDto[]) => {
          console.log('getLocation', next);
          this.location = next[0];
          this.updateWeather();
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

  private updateWeather() {
    if (!this.location) return;

    this.isCityWeatherLoading = true;
    this.getCityWeatherSubs = this.api.getCityWeather(this.location.lat, this.location.lon)
      .pipe(finalize(() => this.isCityWeatherLoading = false))
      .subscribe({
        next: (next: WeatherRootDto) => {
          console.log('getCityWeather', next);
          this.weather = {
            description: next.weather[0].description,
            temp: next.main.temp,
            feelsLike: next.main.feels_like,
            windSpeed: next.wind.speed,
            humidity: next.main.humidity
          };
          this.updateImage();
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

  private updateImage() {
    if (!this.weather) return;

    this.isWeatherImageLoading = true;
    this.getWeatherImageSubs = this.api.getImageByDescription(this.weather.description)
      .pipe(finalize(() => this.isWeatherImageLoading = false))
      .subscribe({
        next: (next: ImageResultDto) => {
          console.log('getImageByDescription', next);
          this.weatherImage = next.results[0].urls.small;
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

}
