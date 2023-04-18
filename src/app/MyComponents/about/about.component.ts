import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formData } from 'src/app/formData';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  reactiveForm!: FormGroup;
  formdat!: formData;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      phoneNum: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });
  }
  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('formdat', JSON.stringify(this.reactiveForm.value));
    this.router.navigate(['/form']);
  }
}
