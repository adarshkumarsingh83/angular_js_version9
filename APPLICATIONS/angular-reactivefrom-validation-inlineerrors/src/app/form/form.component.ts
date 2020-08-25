import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  //same form name as tempate form name
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // FIELD_KEY: [INITIAL_VALUE, [LIST_OF_VALIDATORS]]
    this.myForm = formBuilder.group({
      nameField: [null, Validators.required],
      emailField: [null, [Validators.email, Validators.required]],
      pwdField: [null,[ Validators.minLength(5), Validators.maxLength(10), Validators.required ]],
      termField: [null, Validators.requiredTrue],
    });
  }

  data;
  postData() {
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.value.nameField);
    console.log(this.myForm.value.emailField);
    console.log(this.myForm.value.pwdField);
    console.log(this.myForm.value.termField);
    this.data = {
      name: this.myForm.value.nameField,
      email: this.myForm.value.emailField,
      pwd: this.myForm.value.pwdField,
      term: this.myForm.value.termField,
    };
    console.log(this.data);
  }

  ngOnInit(): void {}
}
