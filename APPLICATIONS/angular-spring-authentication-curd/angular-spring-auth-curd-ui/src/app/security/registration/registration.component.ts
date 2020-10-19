import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { User } from 'src/app/app-services/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  authenticationService: AuthenticationService;
  router: Router;
  user: User;
  message: String;
  appComponent: AppComponent;

  constructor(
    authenticationService: AuthenticationService,
    router: Router,
    appComponent: AppComponent
  ) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.appComponent = appComponent;
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(false);
  }

  registerUser(myForm: NgForm) {
    this.user = {
      id: 0,
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      isAdmin: myForm.value.checkboxInput ? myForm.value.checkboxInput : false,
      userRoles: [myForm.value.checkboxInput ? 'ADMIN' : 'USER'],
    };
    this.authenticationService.registerUser(this.user).subscribe(
      (response) => {
        this.user = response.data;
        this.message = response.message;
        console.log(`RegistrationComponent.registerUser()`, this.user);
      },
      (error) => {
        console.log(`RegistrationComponent.registerUser() Erros `, error);
      }
    );
    console.log(this.user);
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
