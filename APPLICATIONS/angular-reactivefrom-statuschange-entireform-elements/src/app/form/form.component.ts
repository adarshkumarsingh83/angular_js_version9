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
  formStatus='';

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: ['', Validators.required],
      emailField: ['', [Validators.required,Validators.email]],
      pwdField: ['', Validators.required],
      termField: ['', Validators.requiredTrue],
    })
  }
  
  data;
  postData(){
    this.data = { "name": this.myForm.value.nameField,"email": this.myForm.value.emailField,"pwd": this.myForm.value.pwdField, "term": this.myForm.value.termField}
    console.log(this.data);
 }

  ngOnInit(): void {
    this.myForm.statusChanges.subscribe(data =>{
      console.log(data);
      this.formStatus = data;
     })
 }

  resetForm(){
    this.myForm.reset();  
  }
}