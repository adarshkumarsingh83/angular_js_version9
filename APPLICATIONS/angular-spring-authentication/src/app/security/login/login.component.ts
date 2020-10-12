import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  data;
  login(myForm: NgForm){
    console.log(myForm);
    console.log(myForm.value.nameInput);
		console.log(myForm.value.pwdInput);
    this.data = { "name": myForm.value.nameInput, "pwd": myForm.value.pwdInput}
    console.log(this.data);
	}
  ngOnInit(): void {
  }

}
