import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona';
import { ClassPersona } from 'src/app/shared/model/class-persona';

@Component({
  selector: 'andyng-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  persona1: ClassPersona;
  persona2: Persona;
  persona3: Persona;

  listaPersonas: Persona[];

  // readonly DEFAULT_PICTURE: string = 'https://www.palmcityyachts.com/wp/wp-content/uploads/palmcityyachts.com/2015/09/default-profile-480x480.png';

  constructor() { }

  ngOnInit() {
    console.log('Initialize Material List Component')
    this.persona1 = new ClassPersona(1, 'Luis', 'Rodriguez Bermudes');
    console.log('edad.persona1:', this.persona1.getEdad());

    this.persona2 = {
      id: 2,
      nombre: 'José',
      apellidos: 'Tenocio Carrillo',
      fotoURL: 'https://cdn.pixabay.com/photo/2016/10/09/18/03/smile-1726471_960_720.jpg'
    };

    this.persona3 = {
      id: 3,
      nombre: 'Roberto',
      apellidos: 'Arias Estela',
      fotoURL: 'https://i.pinimg.com/236x/f8/87/f4/f887f40ad79d2de59c1b168c1dedff79--terrence-j-star-now.jpg'
    };

    this.listaPersonas = [
      this.persona1,
      this.persona2,
      this.persona3
    ];

    setTimeout(() => {
      this.persona2 = {
        id: 3,
        nombre: 'Evelyn',
        apellidos: 'Carrillo Medina',
        fotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iKld5FgQjluHpukPBUFsES-yNHNF4uKPpayZkxIgFUN6aBPN'
      }
    }, 5000);

  }
  onMouseClick($event: Persona) {
    console.log('click on:',$event.nombre);
  }

}
