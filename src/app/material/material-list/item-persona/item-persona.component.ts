import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona';

@Component({
  selector: 'andyng-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.scss']
})
export class ItemPersonaComponent implements OnInit {
  readonly DEFAULT_PICTURE: string = 'https://www.palmcityyachts.com/wp/wp-content/uploads/palmcityyachts.com/2015/09/default-profile-480x480.png';

  @Input()
  persona: Persona;

  @Output()
  onMouseClick = new EventEmitter<Persona>()

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Persona) {
    this.onMouseClick.emit(e);
  }

}
