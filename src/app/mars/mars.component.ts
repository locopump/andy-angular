import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'andyng-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  cameras: string[] = ['MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamera: string;

  constructor(private apinasa: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = 'MAST';
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string) {
    this.refreshView(camera);
  }

  private refreshView(camera: string) {
    this.apinasa.getMarsImages(camera)
      .subscribe(result => {
        this.marsImages = result.photos;
    });
  }

}
