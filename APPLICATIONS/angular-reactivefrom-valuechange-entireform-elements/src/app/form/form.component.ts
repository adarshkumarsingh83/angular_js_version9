import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //same form name as tempate form name
  myForm: FormGroup; 
  nameValue='';
  emailValue='';
  pwdValue='';

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: ['', Validators.required],
      emailField: ['', Validators.required],
      pwdField: ['', Validators.required],
      termField: ['', Validators.requiredTrue],
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

  ngOnInit(): void {

    this.myForm.valueChanges.subscribe(data =>{
      console.log(data);
      this.nameValue=data.nameField;
      this.emailValue = data.emailField;
  		this.pwdValue = data.pwdField;
     })
 }

  resetForm(){
    this.myForm.reset();  
  }
}