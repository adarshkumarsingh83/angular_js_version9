import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form-reactive-basic';

  myForm: FormGroup; //same form name as tempate form name

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: new FormControl(),
      emailField: new FormControl(),
      pwdField: new FormControl(),
      termField: new FormControl()
    })
  }
  
  data;
  postData(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.value.nameField);
    console.log(this.myForm.value.emailField);
    console.log(this.myForm.value.pwdField);
    console.log(this.myForm.value.termField);
    this.data = { "name": this.myForm.value.nameField,"email": this.myForm.value.emailField,"pwd": this.myForm.value.pwdField, "term": this.myForm.value.termField}
    console.log(this.data);
 }
}
