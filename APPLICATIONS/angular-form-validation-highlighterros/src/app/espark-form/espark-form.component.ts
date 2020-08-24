import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espark-form',
  templateUrl: './espark-form.component.html',
  styleUrls: ['./espark-form.component.scss']
})
export class EsparkFormComponent implements OnInit {

  constructor() { }

  data;
  savaData(myForm: NgForm){
    console.log(myForm);
    console.log(myForm.value.nameInput);
		console.log(myForm.value.emailInput);
		console.log(myForm.value.pwdInput);
    console.log(myForm.value.checkboxInput);
    this.data = { "name": myForm.value.nameInput,"email": myForm.value.emailInput, "pwd": myForm.value.pwdInput, "term": myForm.value.checkboxInput}
    console.log(this.data);
	}

  ngOnInit(): void {
  }

}
