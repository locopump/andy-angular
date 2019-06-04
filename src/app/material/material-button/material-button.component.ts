import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andyng-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.scss']
})
export class MaterialButtonComponent implements OnInit {

  form = {
    disabled: true
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.form.disabled = false;
    }, 5000);
  }

  onClick($event) {
    console.log('click event', $event);
  }

}
