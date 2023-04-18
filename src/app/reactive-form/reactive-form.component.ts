import { Component, Input, OnInit } from '@angular/core';
import { formData } from '../formData';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  formdat: formData;
  constructor() {
    this.formdat = JSON.parse(localStorage.getItem('formdat'));
    console.log(this.formdat);
  }
}
