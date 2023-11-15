import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationDto } from './domain/location';
import { WeatherRootDto } from './domain/weather';
import { ImageResultDto } from './domain/image';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = '577b3bd2eec54e5a84a1ae825e746783';

  constructor(private http: HttpClient) { }

  public getLocation(city: string): Observable<LocationDto[]> {
    const params: HttpParams = new HttpParams()
      .append('q', `${city},RU`)
      .append('limit', '5')
      .append('appid', this.apiKey);

    const url = `http://api.openweathermap.org/geo/1.0/direct`;

    return this.http.get<LocationDto[]>(url, { params: params });
  }

  public getCityWeather(lat: number, lon: number): Observable<WeatherRootDto> {
    const params: HttpParams = new HttpParams()
      .append('lat', lat.toString())
      .append('lon', lon.toString())
      .append('appid', this.apiKey)
      // .append('lang', 'ru')
      .append('units', 'metric');

    const url = `https://api.openweathermap.org/data/2.5/weather`;

    return this.http.get<WeatherRootDto>(url, { params: params });
  }

  public getImageByDescription(description: string): Observable<ImageResultDto> {
    const params: HttpParams = new HttpParams()
      .append('page', '1')
      .append('query', `weather ${description}`)
      .append('client_id', '-cM96gY_B8y_F6Cu8G0OJJeKkEPJkML9_fuNrmtLnLU');

    const url = `https://api.unsplash.com/search/photos`;

    return this.http.get<ImageResultDto>(url, { params: params });
  }
}
