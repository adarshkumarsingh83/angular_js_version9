import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  data;
  registerUser(myForm: NgForm) {
    this.data = {
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      isAdmin: myForm.value.checkboxInput,
    };
    this.dataService.storeOnLocalStorage(this.data);
    console.log(this.data);
  }

  ngOnInit(): void {}
}
