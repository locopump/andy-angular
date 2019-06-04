import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andyng-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

  persona = {
    nombre: 'Frank'
  };
  placeholder = {
    nombre: 'Nombres Completos'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.persona.nombre = 'Cáceres';
      this.placeholder.nombre = 'Apellidos';
    }, 5000);
  }

  onKeyUp($event) {
    console.log('KeyUp', $event);
  }

  onBlur($event) {
    console.log('KeyUp', $event);
  }

}
