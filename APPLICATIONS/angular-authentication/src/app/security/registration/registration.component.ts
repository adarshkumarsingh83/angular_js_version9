import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  dataService: DataService;
  router: Router;
  appComponent: AppComponent;

  constructor(
    dataService: DataService,
    router: Router,
    appComponent: AppComponent
  ) {
    this.dataService = dataService;
    this.router = router;
    this.appComponent = appComponent;
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(false);
  }

  data;
  registerUser(myForm: NgForm) {
    this.data = {
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      isAdmin: myForm.value.checkboxInput ? myForm.value.checkboxInput : false,
    };
    this.dataService.storeOnLocalStorage(this.data);
    console.log(this.data);
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(true);
    this.router.navigate(['/login'], {
      queryParams: { action: 'new-registration' },
    });
  }

  cancelRegistrattion() {
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(true);
    this.router.navigate(['/login'], {
      queryParams: { action: 'cancel-registration' },
    });
  }

  ngOnInit(): void {}
}
