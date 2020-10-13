import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  dataService: DataService;
  router: Router;
  constructor(dataService: DataService, router: Router) {
    this.dataService = dataService;
    this.router = router;
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
    this.router.navigate(['/login'], {
      queryParams: { action: 'new-registration' },
    });
  }

  ngOnInit(): void {}
}
