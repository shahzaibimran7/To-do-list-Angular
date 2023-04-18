import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public form: FormGroup;
  public phoneLabels = ['Zong', 'Jazz', 'Telenor', 'Ufone'];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      phoneNums: this.formBuilder.array([this.createPhoneFormGroup()]),
    });
  }

  createPhoneFormGroup(): FormGroup {
    return new FormGroup({
      number: new FormControl(null, Validators.required),
      label: new FormControl(null),
    });
  }

  addPhoneNum() {
    const phoneNums = this.form.get('phoneNums') as FormArray;
    phoneNums.push(this.createPhoneFormGroup());
  }

  removePhoneNum(i: number) {
    const phoneNums = this.form.get('phoneNums') as FormArray;
    if (phoneNums.length > 1) {
      phoneNums.removeAt(i);
    } else {
      phoneNums.reset();
    }
  }

  onSubmit() {
    localStorage.setItem('formdat', JSON.stringify(this.form.value));
    this.router.navigate(['/form']);
  }
}
