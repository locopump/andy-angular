import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../model/apod';


const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const APOD_KEY = '4d1fc4Qa7Ugxt7dXrg5Cw2J31Kzzn7cYshJ6clUm';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpcone: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.httpcone.get<Apod>(`${APOD_URL}?api_key=${APOD_KEY}`);
  }

  getMarsImages(camera: string): Observable<any> {
    return this.httpcone.get(`${MARS_URL}&camera=${camera}&api_key=${APOD_KEY}`);
  }
}
