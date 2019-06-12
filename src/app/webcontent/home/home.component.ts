import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/shared/model/apod';
import { NasaApiService } from 'src/app/shared/services/nasa-api.service';


@Component({
  selector: 'andyng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApod()
    .subscribe((data: Apod) => {
      setTimeout(() => {
        this.apod = data;
      }, 5000);

    }, error => {
      console.log('Error al conectar con el servidor');
      this.error = 'Error al conectar con el servidor';
    });
  }

}
