import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {
  firstName: string = '';
  lastName: string = '';
  selectedOption: string = '';
  phoneNumber: string = '';
  email: string = '';
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      selectedOption: new FormControl('')
    });
  }

  onOptionChange() {
    if (this.selectedOption !== 'phone') {
      this.phoneNumber = '';
    }
    if (this.selectedOption !== 'email') {
      this.email = '';
    }
  }
}
